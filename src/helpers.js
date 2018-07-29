function getTimeAgo(date,showAbout){
    const timeDiff =  Date.now()-new Date(date);
    let diffInMeasurement=0;
    let str = ""

    if (timeDiff > 604800000) {
        diffInMeasurement = timeDiff / 604800000;
        str = (Math.floor(diffInMeasurement)!==1)?Math.floor(diffInMeasurement) + " weeks ago":"1 week ago"
    }else if (timeDiff > 86400000) {
        diffInMeasurement = timeDiff / 86400000;
        str = (Math.floor(diffInMeasurement)!==1)?Math.floor(diffInMeasurement) + " days ago":"1 day ago"
    } else if(timeDiff>3600000) {
        diffInMeasurement = timeDiff / 3600000;
        str = (Math.floor(diffInMeasurement)!==1)?Math.floor(diffInMeasurement) + " hours ago":"1 hour ago"
    }else if(timeDiff>60000){
        diffInMeasurement = timeDiff / 60000;
        str = (Math.floor(diffInMeasurement)!==1)?Math.floor(diffInMeasurement) + " minutes ago":"1 minute ago"
    } else{
        str=" Just now"
    }
    if(showAbout && (diffInMeasurement%1)>0.25){
        str= "About "+ str
    }

    return str
}
export {getTimeAgo}