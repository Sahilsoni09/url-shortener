import urlSchema from '../models/short_url.model.js'


export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl,
        clicks: 0
    })
    if (userId) {
        newUrl.user_id = userId
    }
    newUrl.save()
}

export const getShortUrl = async (shortUrl) => {
    const url = await urlSchema.findOneAndUpdate({ short_url: shortUrl }, {$inc: {clicks: 1}})
    return url
}