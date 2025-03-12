export function isExtLink(link?: string) {
    if (!link)
        return false
    return link.includes(':')
}

export function trimLink(link?: string) {
    if (!link)
        return link
    return link
        .replace(/^(https?:\/\/(www.)?|mailto:)/, '')
        .replace(/\/$/, '')
}
