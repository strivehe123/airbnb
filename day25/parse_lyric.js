function parseLyricString(songString) {
    const song_list = songString.split('\n')
    const timeRe = /\[(?<min>\d{2}):(?<sec>\d{2})\.(?<secM>\d{2,3})\]/i
    const lyricInfos = []
    for (const lintString of song_list) {
        const result = lintString.match(timeRe)
        if (!result) continue
        const minTime = result.groups.min * 60 * 1000
        const secTime = result.groups.sec * 1000
        const secMTime = result.groups.secM.length == 3 ? result.groups.secM * 1 : result.groups.secM * 10
        const time = minTime + secTime + secMTime
        const content = lintString.replace(timeRe, '').trim()
        const lyricInfo = {
            time,
            content
        }
        lyricInfos.push(lyricInfo)
    }
    return lyricInfos
}