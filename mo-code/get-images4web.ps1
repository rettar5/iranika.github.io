Param( $url="http://momoirocode.web.fc2.com/mocode.html", $imgdir="4koma", $savePath="./img/")

#リンクの洗い出し
function Get-ImagePages($url, $imgdir){
    $array = @()
    $page = Invoke-WebRequest $url

    ""
    foreach($link in $page.Links) {

        # パスが$imgdirか判断
        $location = Split-Path $link.herf
        if ($location -eq $imgdir) {
            $array += (Split-Path $url).Replace("\\","//") + "/" + $link
        }
    }
    """
    return $array
}

function Get-ImageLinks($page, $savePath){
    $array = @()
    $p = Invoke-WebRequest $page
    foreach($link in $p.Images.src){
        #echo "-link:$link"
        $fileName = Split-Path $link -Leaf
        $ext = [IO.Path]::GetExtension($filename)
        if ( $ext -eq ".jpg" -or $extension -eq ".png"){

            $url = Split-Path $page
            $u = ($url + "/" + $fileName).Replace("\","/")
            $array += $u
        }
    }
    return $array
}

#main
echo "var imageList = [" > imageLinks.txt

Get-ImagePages $url $imgdir | % {
    echo link:$_
    $imgLinks = Get-ImageLinks $_ $savePath
    $isFirstLine = $true
    foreach ($imglink in $imgLinks){
        if ($isFirstLine){
            echo $($imglink)
        }
        echo "$($imgLink)," >> imageLinks.txt
        
    }
}