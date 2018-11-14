<script language="javascript">
        var button_state = 1;

        {/* //set the operation of button */}
        function change_button_state() {
            if(button_state == 1) {
                document.getElementById("play_button").src = "run.jpg";
                return button_state = 0;
            } else {
                document.getElementById("play_button").src = "stop.jpg";
                randomly_refresh();
                return button_state = 1;
            }
        }


        //set the randomly refresh function
        function randomly_refresh() {
            var set_meta = document.getElementsByTagName("meta");
            set_meta[0]["httpEquiv"] = "refresh";
            set_meta[0]["content"] = "5";
            var url = [
                "http://flobe-online.de/xml-proxy.php?url=http://feeds.feedburner.com/HowToGeek",
                "http://flobe-online.de/xml-proxy.php?url=https://www.technologyreview.com/stories.rss",
                "http://flobe-online.de/xml-proxy.php?url=http://feeds.feedburner.com/Techcrunch/europe"
            ]
            while (button_state == 1) {
                i = Math.ceil(Math.random() * 3);
                random_url = url[i];
                http_request(random_url);
            }

        }

        url = "http://flobe-online.de/xml-proxy.php?url=http://feeds.feedburner.com/HowToGeek";
        http_request(url);
        function http_request(url) {
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    xmlDoc = xmlhttp.responseText;
                    xmlDocJson = JSON.parse(xmlDoc);
                    // xmlDoc = xmlhttp.responseXML;
                    document.getElementById("title").innerHTML =
                        xmlDocJson.channel.title;
                    setlink = xmlDocJson.channel.link;
                    document.getElementById("link").setAttribute("href", setlink);
                    document.getElementById("description").innerHTML =
                        xmlDocJson.channel.description;
                    document.getElementById("message").innerHTML =
                        xmlDocJson.channel.pubDate;
                }
            };
            xmlhttp.open("GET", url, false);
            xmlhttp.send();
        }



    </script>