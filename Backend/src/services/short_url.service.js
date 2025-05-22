import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js";
import { saveShortUrl } from "../dao/short_url.js";

export const  createShortUrlService = async(url) => {
    const shortUrl  = await generateNanoId(7);
    await saveShortUrl(shortUrl,url);
    return shortUrl;
}