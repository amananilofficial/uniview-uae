function manual() {
    var camera = { "IPC2100": { name: "IPC2100 Series-Network Bullet Cameras Quick Guide-V1.01", link: "1606873" }, "IPC2200": { name: "IPC2200 Series-Network Bullet Cameras Quick Guide-V1.01", link: "1606872" }, "IPC2300": { name: "IPC2300 Series-Network Bullet Cameras Quick Guide-V1.01", link: "1606871" }, "IPC220": { name: "IPC220 Series-Network Bullet Cameras Quick Guide-V1.01", link: "1606727" }, "IPC240": { name: "IPC240 Series-Network Bullet Cameras Quick Guide-V1.01", link: "1606879" }, "IPC3200": { name: "IPC3200 Series-Network Fixed Dome Cameras Quick Guide-V1.01", link: "1606870" }, "IPC3600": { name: "IPC3600 Series-Network Mini Dome Cameras Quick Guide-V1.01", link: "1606869" }, "IPC320": { name: "IPC320 Series-Network Fixed Dome Cameras Quick Guide-V1.01", link: "1606878" }, "IPC340": { name: "IPC340 Series-Network Fixed Dome Cameras Quick Guide-V1.01", link: "1606877" }, "IPC540_IPC560": { name: "IPC540_IPC560 Series-Network Box Cameras Quick Guide-V1.01", link: "1606876" }, "IPC6200": { name: "IPC6200 Series-Outdoor Network PTZ Dome Cameras Quick Guide-V1.01", link: "1606868" }, "IPC640-Outdoor": { name: "IPC640 Series-Outdoor Network PTZ Dome Cameras Quick Guide-V1.00 ", link: "1606874" }, "IPC640-Indoor": { name: "IPC640 Series-Indoor Network PTZ Dome Cameras Quick Guide-V1.00 ", link: "1606875" }, "Install Guide": { name: "Camera Installation Guide-V1.00", link: "1606731" }, "User Manual": { name: "Network Cameras User Manual-V3.00", link: "1863440" }, "IPC Accessories Installation Guide": { name: "IPC Accessories Installation Guide V2.7", link: "1611259" } },
        nvr = { "24SATA": { name: "24 SATA-Network Video Recorders Quick Guide-V1.01", link: "1862753" }, "NVR5": { name: "UNV-5 Series-Network Video Recorders Quick Guide-V1.03", link: "1862734" }, "NVR3": { name: "UNV-3 Series-Network Video Recorders Quick Guide-V1.00", link: "1862719" }, "HNVR": { name: "Hybrid Network Video Recorders Quick Guide-V1.00", link: "1862704" }, "Quick Guide": { name: "Network Video Recorders Quick Guide-V1.04", link: "1726325" }, "User Manual": { name: "Network Video Recorders User Manual-V3.02 ", link: "1894040" }, "HUser Manual": { name: "Hybrid Network Video Recorders User Manual", link: "1862750" }, "Safety-Compliance": { name: "Safety and Compliance Information", link: "1606887" } },
        dvr = { "Quick Guide": { name: "Digital Video Recorders Quick Guide", link: "1877170" },"XVR301-F": { name: "Digital Video Recorders Quick Guide", link: "1877186"}, "User Manual": { name: "Digital Video Recorders User Manual", link: "1863836" } },
        uniarchCamera = { "Uniarch-IPCT100": { name: "Uniarch-IPCT100 Series-Network Mini Dome Cameras Quick Guide-V1.00", link: "1728379" }, "User Manual": { name: "Uniarch Network Cameras User Manual-V1.00", link: "1730188" } },
        uniarchNvr = { "Quick Guide": { name: "Network Video Recorders Quick Guide-V1.04", link: "1789260" }, "User Manual": { name: "Uniarch Network Video Recorders User Manual-V1.00", link: "1728620" } },
        accessories = { "IPC-Accessories": { name: "IPC Accessories Installation Guide", link: "1821043" } },
        manualBox = { "camera": camera, "nvr": nvr, "dvr": dvr, "uniarchCamera": uniarchCamera, "uniarchNvr": uniarchNvr },
        tmp = '<p><a href="/download.do?id={{link}}">{{name}}</a></p>';

    function cameraSetup(a) {
        var html = "";
        if (camera[a]) { html += tmp.replace("{{link}}", camera[a]["link"]).replace("{{name}}", camera[a]["name"]); }
        /*html += tmp.replace("{{link}}", camera["Install Guide"]["link"]).replace("{{name}}", camera["Install Guide"]["name"]);*/
        html += tmp.replace("{{link}}", camera["User Manual"]["link"]).replace("{{name}}", camera["User Manual"]["name"]);
        $("#ManualDownload").append(html);
    }

    function nvrSetup(a) {
        var html = "";
        //html += tmp.replace("{{link}}", nvr["Quick Guide"]["link"]).replace("{{name}}", nvr["Quick Guide"]["name"]);
        html += tmp.replace("{{link}}", nvr["User Manual"]["link"]).replace("{{name}}", nvr["User Manual"]["name"]);
        if (nvr[a]) { html += tmp.replace("{{link}}", nvr[a]["link"]).replace("{{name}}", nvr[a]["name"]); }
        $("#ManualDownload").append(html);
    }

    function dvrSetup(a) {
        var html = "";
        if (dvr[a]) {
        	html += tmp.replace("{{link}}", dvr[a]["link"]).replace("{{name}}", dvr[a]["name"]);
        }else{
        	html += tmp.replace("{{link}}", dvr["Quick Guide"]["link"]).replace("{{name}}", dvr["Quick Guide"]["name"]);
        }
        html += tmp.replace("{{link}}", dvr["User Manual"]["link"]).replace("{{name}}", dvr["User Manual"]["name"]);
        $("#ManualDownload").append(html);
    }

    function uniarchCameraSetup(a) {
        var html = "";
        if (uniarchCamera[a]) { html += tmp.replace("{{link}}", uniarchCamera[a]["link"]).replace("{{name}}", uniarchCamera[a]["name"]); }
        html += tmp.replace("{{link}}", uniarchCamera["User Manual"]["link"]).replace("{{name}}", uniarchCamera["User Manual"]["name"]);
        $("#ManualDownload").append(html);
    }

    function uniarchNvrSetup(a) {
        var html = "";
        if (uniarchNvr[a]) { html += tmp.replace("{{link}}", uniarchNvr[a]["link"]).replace("{{name}}", uniarchNvr[a]["name"]); } else { html += tmp.replace("{{link}}", uniarchNvr["Quick Guide"]["link"]).replace("{{name}}", uniarchNvr["Quick Guide"]["name"]); }
        html += tmp.replace("{{link}}", uniarchNvr["User Manual"]["link"]).replace("{{name}}", uniarchNvr["User Manual"]["name"]);
        $("#ManualDownload").append(html);
    }

    function accessoriesSetup(a) {
        var html = "";
        if (accessories[a]) { html += tmp.replace("{{link}}", accessories[a]["link"]).replace("{{name}}", accessories[a]["name"]); }
        $("#ManualDownload").append(html);
    }
    return {
        camera: cameraSetup,
        nvr: nvrSetup,
        dvr: dvrSetup,
        uniarchCamera: uniarchCameraSetup,
        uniarchNvr: uniarchNvrSetup,
        accessories: accessoriesSetup,
        assemb: function(a, b) {
            var type = manualBox[a],
                html = "";
            for (var i = 0, n = b.length; i < n; i++) { html += tmp.replace("{{link}}", type[b[i]]["link"]).replace("{{name}}", type[b[i]]["name"]); }
            $("#ManualDownload").append(html);
        }
    }
}

function Accessories() {
    var ds = {
            "HS-108-IN": { desc: "Indoor-housing", img: "/201512/24/20151224_1606573_STAR_787325_140445_0.jpg", link: "/Housing/HS-108/" },
            "HS-217S-IN": { desc: "Outdoor-housing", img: "/201802/09/20180209_1611757_1_790229_140445_0.jpg", link: "/Housing/HS-217S-IN/" },
            "HS-217SHB-BL": { desc: "Outdoor-housing", img: "/201802/11/20180211_1611834_0_790216_140445_0.jpg", link: "/Housing/HS-217SHB-BL/" },
            "HS-217SHB-IR": { desc: "Outdoor-housing", img: "/201802/09/20180209_1611752_1_790222_140445_0.jpg", link: "/Housing/HS-217SHB-IR/" },
            "HS-217SHB-IR-B-NB": { desc: "Outdoor-housing", img: "/201908/02/20190802_1732660_1_853562_140445_0.jpg", link: "/Housing/HS-217SHB-IR-B-NB/" },
            "HS-217SHB-B-NB": { desc: "Outdoor-housing", img: "/201908/02/20190802_1732658_1_853560_140445_0.jpg", link: "/Housing/HS-217SHB-B-NB/" },
            "HS-217S-B-NB": { desc: "Outdoor-housing", img: "/201908/02/20190802_1732650_1_853548_140445_0.jpg", link: "/Housing/HS-217S-B-NB/" },
            "TR-A01-IN": { desc: "Plastic waterproof joint", img: "/201807/12/20180712_1641075_1_804493_140445_0.jpg", link: "/Bracket/Dome/TR-A01-IN/" },
            "TR-CE45-IN": { desc: "Dome Pendant Mount", img: "/201802/09/20180209_1611791_1_790264_140445_0.jpg", link: "/Bracket/Dome/TR-CE45-IN/" },
            "TR-CM06-IN": { desc: "Indoor Pendant Mount", img: "/201503/27/20150327_1602870_AE-TR-CM06_787459_140445_0.jpg", link: "/Bracket/Housing/TR-CM06-IN/" },
            "TR-CM06-C-IN": { desc: "OmniView Network Camera Pendant Mount", img: "/201906/20/20190620_1730290_1_851916_140445_0.jpg", link: "/Bracket/OmniView/TR-CM06-C-IN/" },
            "TR-CM24-IN": { desc: "Fixed Dome Indoor Pendant Mount", img: "/201812/10/20181210_1688328_11_827875_140445_0.jpg", link: "/Bracket/Dome/TR-CM24-IN/" },
            "TR-FM152-A-IN": { desc: "Indoor Fixed Dome In-ceiling Mount", img: "/201510/10/20151010_1604517_TR-FM152-A-IN-F-STAR_788016_140445_0.jpg", link: "/Bracket/Dome/TR-FM152-A-IN/" },
            "TR-FM200-IN": { desc: "Indoor PTZ Dome In-ceiling Mount", img: "/201503/27/20150327_1602876_AE-TR-FM200_787507_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-FM200-IN/" },
            "TR-JB03-G-IN": { desc: "Fixed Dome Junction Box", img: "/201901/11/20190111_1700877_1_827880_140445_0.jpg", link: "/Bracket/Dome/TR-JB03-G-IN/" },
            "TR-JB03-H-IN": { desc: "Fixed Dome Junction Box", img: "/201901/11/20190111_1700909_1_827887_140445_0.jpg", link: "/Bracket/Dome/TR-JB03-H-IN/" },
            "TR-JB03-I-IN": { desc: "Fixed Dome Junction Box", img: "/201901/11/20190111_1700914_1_827892_140445_0.jpg", link: "/Bracket/Dome/TR-JB03-I-IN/" },
            "TR-JB04-C-IN": { desc: "Fixed Dome Junction Box", img: "/201901/11/20190111_1700920_1_827898_140445_0.jpg", link: "/Bracket/Dome/TR-JB04-C-IN/" },
            "TR-JB04-D-IN": { desc: "Fixed Dome Junction Box", img: "/201901/11/20190111_1700924_1_827904_140445_0.jpg", link: "/Bracket/Dome/TR-JB04-D-IN/" },
            "TR-JB05-A-IN": { desc: "Mini Bullet Camera Junction Box", img: "/201812/10/20181210_1688368_11_827912_140445_0.jpg", link: "/Bracket/Bullet/TR-JB05-A-IN/" },
            "TR-JB05-B-IN": { desc: "Bullet Camera Junction Box", img: "/201812/10/20181210_1688374_11_827918_140445_0.jpg", link: "/Bracket/Bullet/TR-JB05-B-IN/" },
            "TR-JB06-IN": { desc: "Bullet Junction Box", img: "/201802/09/20180209_1611782_1_790254_140445_0.jpg", link: "/Bracket/Bullet/TR-JB06-IN/" },
            "TR-JB06-A-IN": { desc: "Bullet Camera Junction Box", img: "/201812/10/20181210_1688377_11_827921_140445_0.jpg", link: "/Bracket/Bullet/TR-JB06-A-IN/" },
            "TR-JB07-D-IN": { desc: "Bullet Junction Box", img: "/201812/10/20181210_1688404_11_827944_140445_0.jpg", link: "/Bracket/Bullet/TR-JB07-D-IN/" },
            "TR-JB07/WM04-B-IN": { desc: "Fixed Dome Outdoor Wall Mount", img: "/201812/10/20181210_1688429_11_827973_140445_0.jpg", link: "/Bracket/Dome/TR-JB07WM04-B-IN/" },
            "TR-JB07/WM03-F-IN": { desc: "Fixed Dome Outdoor Wall Mount", img: "/201812/10/20181210_1688383_11_827927_140445_0.jpg", link: "/Bracket/Dome/TR-JB07WM03-F-IN/" },
            "TR-JB07/WM03-G-IN": { desc: "Fixed Dome Outdoor Wall Mount", img: "/201812/10/20181210_1688395_11_827935_140445_0.jpg", link: "/Bracket/Dome/TR-JB07WM03-G-IN/" },
            "TR-JB07/WM04-IN": { desc: "4-inch Fixed Dome Outdoor Wall Mount", img: "/201510/10/20151010_1604523_TR-JB07 WM04-IN-STAR_788047_140445_0.jpg", link: "/Bracket/Dome/TR-JB07WM04-IN/" },
            "TR-JB08": { desc: "Dual-channel dome junction box", img: "/202401/02/20240102_1897124_e_985613_140445_0.jpg", link: "/Bracket/Dome/TR-JB08/" },
            "TR-JB12-IN": { desc: "12-inch Junction Box", img: "/201511/10/20151110_1605291_STAR_788190_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-JB12-IN/" },
            "TR-UC08-A-IN": { desc: "PTZ Dome Corner Mount", img: "/201503/27/20150327_1602879_AE-TR-UC08-A_787529_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UC08-A-IN/" },
            "TR-UC08-B-IN": { desc: "PTZ Dome Corner Mount", img: "/201511/06/20151106_1605243_1-STAR_788222_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UC08-B-IN/" },
            "TR-UC08-C" : {desc: "Bullet&Dome Corner Mounting Bracket", img: "/202304/25/20230425_1879319_1_969245_140445_0.jpg", link: "/Bracket/Bullet/TR-UC08-C/"},
            "TR-UF45-A-IN": { desc: "PTZ Dome Indoor Pendant Mount", img: "/201503/27/20150327_1602880_AE-TR-UF45-A_787537_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UF45-A-IN/" },
            "TR-UF45-H-IN": { desc: "Fixed Dome Plate Mount", img: "/201802/09/20180209_1611826_1_790295_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UF45-H-IN/" },
            "TR-UM06-A-IN": { desc: "Box Camera Mount", img: "/201802/09/20180209_1611761_1_790235_140445_0.jpg", link: "/Bracket/Box/TR-UM06-A-IN/" },
            "TR-UM06-E-IN": { desc: "Fixed Dome Indoor Incline Mount", img: "/201802/09/20180209_1611813_1_790280_140445_0.jpg", link: "/Bracket/Dome/TR-UM06-E-IN/" },
            "TR-UP06-IN": { desc: "Pole Mount Adapter", img: "/201802/09/20180209_1611816_1_790285_140445_0.jpg", link: "/Bracket/Dome/TR-UP06-IN/" },
            "TR-UP06-IN For Bullet": { desc: "Pole Mount Adapter", img: "/201809/14/20180914_1641944_TR-UP06-IN_804563_140445_0.jpg", link: "/Bracket/Bullet/TR-UP06-IN/" },
            "TR-UP06-B-IN": { desc: "Pole Mount Adapter", img: "/201803/30/20180330_1640609_1_804248_140445_0.jpg", link: "/Bracket/Bullet/TR-UP06-B-IN/" },
            "TR-UP06-C-IN": { desc: "Pole Mount Adapter", img: "/201812/10/20181210_1688419_11_827962_140445_0.jpg", link: "/Bracket/Bullet/TR-UP06-C-IN/" },
            "TR-UP08-A-IN": { desc: "Pole Mount Adapter", img: "/201503/27/20150327_1602883_AE-TR-UP08-A_787561_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UP08-A-IN/" },
            "TR-UP08-B-IN": { desc: "Pole Mount Adapter", img: "/201511/06/20151106_1605253_STAR_788230_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-UP08-B-IN/" },
            "TR-UV06-A-IN": { desc: "Housing Bracket", img: "/201503/27/20150327_1602872_AE-TR-UV06-A_787475_140445_0.jpg", link: "/Bracket/Housing/TR-UV06-A-IN/" },
            "TR-UV06-C-IN": { desc: "OmniView Network Camera 2D Bracket Mount", img: "/201906/20/20190620_1730295_1_851922_140445_0.jpg", link: "/Bracket/OmniView/TR-UV06-C-IN/" },
            "TR-SE24-IN": { desc: "Fixed Dome Pendant Mount", img: "/201812/10/20181210_1688414_11_827956_140445_0.jpg", link: "/Bracket/Dome/TR-SE24-IN/" },
            "TR-SE24-A-IN": { desc: "Fixed Dome Pendant Mount", img: "/201812/10/20181210_1688430_11_827974_140445_0.jpg", link: "/Bracket/Dome/TR-SE24-A-IN/" },
            "TR-SE45-IN": { desc: "PTZ Dome Pendant Mount (200mm)", img: "/201503/27/20150327_1602877_AE-TR-SE45_787515_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-SE45-IN/" },
            "TR-SE45-A-IN": { desc: "PTZ Dome Pendant Mount (500mm)", img: "/201503/27/20150327_1602878_AE-TR-SE45-A_787522_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-SE45-A-IN/" },
            "TR-SM04-IN": { desc: "4-inch Fixed Dome Electric-box Transfer Plate", img: "/201510/10/20151010_1604524_TR-SM04-IN-STAR_788111_140445_0.jpg", link: "/Bracket/Dome/TR-SM04-IN/" },
            "TR-SM06-IN": { desc: "Box Camera L-form Mount", img: "/201503/27/20150327_1602862_AE-TR-SM06_787396_140445_0.jpg", link: "/Bracket/Box/TR-SM06-IN/" },
            "TR-WE45-IN": { desc: "PTZ Dome Wall Mount", img: "/201503/27/20150327_1602884_TR-WE45-IN_787569_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-WE45-IN/" },
            "TR-WE45-A-IN": { desc: "PTZ Dome Wall Mount", img: "/201511/10/20151110_1605293_STAR_788238_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-WE45-A-IN/" },
            "TR-WE45-B-IN": { desc: "PTZ Dome Gooseneck Bracket Mount", img: "/201802/09/20180209_1611830_1_790300_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-WE45-B-IN/" },
            "TR-WE45-D-IN": { desc: "OmniView Network Camera Wall Mount", img: "/201906/20/20190620_1730306_1_851928_140445_0.jpg", link: "/Bracket/OmniView/TR-WE45-D-IN/" },
            "TR-WM03-B-IN": { desc: "3-inch Fixed Dome Mount", img: "/201803/30/20180330_1640627_1_804278_140445_0.jpg", link: "/Bracket/Dome/TR-WM03-B-IN/" },
            "TR-WM03-D-IN": { desc: "Fixed Dome Mount", img: "/201812/10/20181210_1688427_11_827970_140445_0.jpg", link: "/Bracket/Dome/TR-WM03-D-IN/" },
            "TR-WM04-IN": { desc: "4-inch Fixed Dome Indoor Wall Mount", img: "/201510/10/20151010_1604527_TR-WM04-IN-STAR_788071_140445_0.jpg", link: "/Bracket/Dome/TR-WM04-IN/" },
            "TR-WM06-A-IN": { desc: "Indoor Wall Mount", img: "/201503/27/20150327_1602873_AE-TR-WM06-A_787483_140445_0.jpg", link: "/Bracket/Housing/TR-WM06-A-IN/" },
            "TR-WM06-C-IN": { desc: "Box Wall Mount", img: "/201802/09/20180209_1611766_1_790241_140445_0.jpg", link: "/Bracket/Box/TR-WM06-C-IN/" },
            "TR-WM06-F": { desc: "Bullet Wall Mount", img: "/201903/11/20190311_1720403_11_845342_140445_0.jpg", link: "/Bracket/Bullet/TR-WM06-F/" },
            "TR-WM06-I-IN": { desc: "Housing Wall Mount Bracket", img: "/201910/08/20191008_1735633_1_857057_140445_0.jpg", link: "/Bracket/Housing/TR-WM06-I-IN/" },
            "TR-WM07P-B": {desc: "Plastic Wall Mount", img: "/202311/06/20231106_1891351_1_966361_140445_0.jpg",link: "/Bracket/Dome/TR-WM07P-B/"},
            "TR-WM08-B": { desc: "Platform Wall Mount Bracket", img: "/202006/24/20200624_1776263_1_882955_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-WM08-B/" },
            "TR-CM06-A": { desc: "PTZ Camera Celling Mount Braket", img: "/202112/16/20211216_1817401_TR-CM06-A_920366_140445_0.jpg", link: "/Bracket/Bullet/TR-CM06-A/" },
            "TR-CM06-D": { desc: "PTZ Camera Celling Mount Braket", img: "/202112/16/20211216_1819583_TR-CM06-A_923938_140445_0.jpg", link: "/Bracket/PTZ_Dome/TR-CM06-D/" },
            "PWR-DC1201A-EU": {desc:"Wall Plug-in EU Power Adapter", img:"/202304/13/20230413_1878039_1_968422_140445_0.jpg", link:"/Power/PWR-DC1201A-EU/"},
            "PWR-DC1201A-UK": {desc:"Wall Plug-in UK Power Adapter", img:"/202304/13/20230413_1878087_1_968502_140445_0.jpg", link:"/Power/PWR-DC1201A-UK/"},
            "PWR-DC1201A-US": {desc:"Wall Plug-in US Power Adapter", img:"/202304/13/20230413_1878135_1_968582_140445_0.jpg", link:"/Power/PWR-DC1201A-US/"},
            "PWR-DC1201B-UK": {desc:"Wall Plug-in UK Power Adapter", img:"/202311/06/20231106_1891095_2_979581_140445_0.jpg", link:"/Power/PWR-DC1201B-UK/"},
            "PWR-DC1201B-US": {desc:"Wall Plug-in US Power Adapter", img:"/202311/06/20231106_1891159_2_979661_140445_0.jpg", link:"/Power/PWR-DC1201B-US/"},
            "PWR-DC1201B-EU": {desc:"Wall Plug-in EU Power Adapter", img:"/202311/06/20231106_1891031_2_979501_140445_0.jpg", link:"/Power/PWR-DC1201B-EU/"},
            "PWR-DC1201A-IND": {desc:"Wall Plug-in IND Power Adapter", img:"/202311/06/20231106_1890953_1_979421_140445_0.jpg", link:"/Power/PWR-DC1201A-IND/"}
        },
        c = {
            "IPC-B11X": ["TR-UP06-B-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-A-IN"],
            "IPC-D11X": ["TR-UM06-E-IN", "TR-UP06-IN For Bullet", "TR-A01-IN", "TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC-T11X": ["TR-UP06-IN For Bullet", "TR-A01-IN", "TR-JB03-I-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC54x_56x": ["TR-WM06-C-IN", "TR-UM06-A-IN", "HS-108-IN", "HS-217S-IN", "HS-217SHB-BL", "HS-217SHB-IR-B-NB", "TR-UV06-A-IN", "TR-UP06-IN", "TR-CM06-IN", "TR-WM06-A-IN", "TR-SM06-IN"],
            "IPC54X_IPC56X": ["TR-WM06-C-IN", "TR-UM06-A-IN", "TR-UV06-A-IN", "TR-UP06-IN", "TR-WM06-I-IN", "HS-217S-B-NB", "HS-217SHB-IR-B-NB", "HS-217SHB-B-NB"],
            "IPC2A2X": ["TR-WM06-F", "TR-WM06-C-IN", "TR-UM06-A-IN", "TR-UP06-B-IN"],
            "IPC323x": ["TR-FM152-A-IN", "TR-WM04-IN", "TR-UP06-IN", "TR-SM04-IN", "TR-A01-IN", "TR-JB04-C-IN", "TR-JB07/WM04-B-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC32xSEL": ["TR-UM06-E-IN", "TR-UP06-IN", "TR-A01-IN", "TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC354": ["TR-UM06-E-IN", "TR-UP06-IN", "TR-A01-IN", "TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN"],
            "IPC361xL": ["TR-UP06-IN For Bullet", "TR-A01-IN", "TR-JB03-I-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC361x_363x": ["TR-WM03-B-IN", "TR-UP06-IN", "TR-A01-IN", "TR-JB03-H-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-JB07/WM03-F-IN"],
            "IPC31x": ["TR-UM06-E-IN", "TR-A01-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-JB03-G-IN", "TR-UP06-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],


            "IPC362x": ["TR-JB03-I-IN",  "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-A01-IN", "TR-UP06-IN","TR-UC08-C","TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],


            "IPC868": ["TR-A01-IN", "TR-JB04-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC814": ["TR-A01-IN", "TR-JB03-H-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC2222_23xx_24x_252_26x_74x": ["TR-UP06-B-IN", "TR-A01-IN", "TR-JB07-D-IN", "TR-JB06-A-IN", "TR-UP06-C-IN"],
            "IPC21xx": ["TR-UP06-B-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-A-IN"],
            "IPC21xxLB": ["TR-UP06-B-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-A-IN","TR-UC08-C"],
            "IPC2128": ["TR-JB06-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-B-IN"],
            "IPC2128C": ["TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-B-IN"],
            "IPC2108SB": ["TR-A01-IN", "TR-UP06-C-IN", "TR-JB05-B-IN","TR-UC08-C"],
            "IPC2C22": ["TR-UM06-A-IN", "TR-UP06-B-IN", "TR-WM06-C-IN", "TR-WM06-F"],
            "IPC26X": ["TR-JB07-D-IN", "TR-JB06-A-IN", "TR-UP06-B-IN", "TR-UP06-C-IN", "TR-A01-IN"],
            "IPC62xx_63xx": ["TR-CE45-IN", "TR-UF45-A-IN", "TR-SE45-IN", "TR-SE45-A-IN", "TR-WE45-IN", "TR-WE45-A-IN", "TR-WE45-B-IN", "TR-JB12-IN", "TR-UP08-A-IN", "TR-UC08-A-IN", "TR-UP08-B-IN", "TR-UC08-B-IN"],
            "IPC67X": ["TR-UP06-B-IN", "TR-A01-IN", "TR-JB07-D-IN", "TR-UP06-C-IN"],
            "IPC68x": ["TR-CE45-IN", "TR-UF45-A-IN", "TR-SE45-IN", "TR-SE45-A-IN", "TR-WE45-A-IN", "TR-WE45-B-IN", "TR-JB12-IN", "TR-UP08-A-IN", "TR-UC08-A-IN", "TR-UP08-B-IN", "TR-UC08-B-IN"],
            "IPC6854": ["TR-CE45-IN", "TR-UF45-A-IN", "TR-SE45-IN", "TR-SE45-A-IN", "TR-WE45-IN", "TR-WE45-A-IN", "TR-WE45-B-IN", "TR-JB12-IN", "TR-UP08-A-IN", "TR-UC08-A-IN", "TR-UP08-B-IN", "TR-UC08-B-IN"],
            "IPC6222EI_X22UP_C": ["TR-CE45-IN", "TR-UF45-H-IN", "TR-WE45-IN", "TR-WE45-A-IN", "TR-WE45-B-IN", "TR-FM200-IN"],
            "MiniPTZ": ["TR-WM03-B-IN", "TR-UP06-IN", "TR-A01-IN", "TR-JB03-H-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-JB07/WM03-F-IN"],
            "IPC8542ER5-DUG": ["TR-CM06-C-IN", "TR-UV06-C-IN", "TR-WE45-D-IN", "TR-UP06-B-IN", "TR-UP06-IN", "TR-JB07-D-IN"],
            "IPC262EB": ["TR-UP06-C-IN"],
            "IPC2B2XSS": ["TR-UP06-C-IN"],
            "IPC373XSE": ["TR-JB03-H-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-A01-IN", "TR-UP06-IN", ],
            "IPC76XX": ["TR-WM08-B"],
            "IPC232x": ["TR-UP06-B-IN", "TR-JB07-D-IN", "TR-JB06-A-IN", "TR-UP06-C-IN"],
            "IPC323X_series": ["TR-JB04-C-IN", "TR-A01-IN", "TR-FM152-A-IN", "TR-UP06-IN", "TR-JB07/WM04-B-IN", "TR-SM04-IN", "TR-WM04-IN"],
            "IPC363X": ["TR-JB03-H-IN", "TR-A01-IN", "TR-WM03-B-IN", "TR-UP06-IN", "TR-JB07/WM03-F-IN"],
            "IPC363XSS": ["TR-WM03-B-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-UP06-IN"],
            "IPC373XSS": ["TR-WM04-IN", "TR-UP06-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "IPC373X_series": ["TR-WM04-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-A01-IN", "TR-UP06-IN"],
            "IPC675_series": ["TR-UP06-B-IN", "TR-A01-IN", "TR-JB07-D-IN", "TR-UP06-C-IN", "TR-CM06-D"],
            "IPC6312_series": ["TR-UP06-B-IN", "TR-A01-IN", "TR-JB07-D-IN", "TR-UP06-C-IN", "TR-CM06-D"],
            "TIC2621SR": ["TR-UP06-IN"],
            "IPC361x": ["TR-UP06-IN For Bullet", "TR-A01-IN", "TR-JB03-I-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-UM06-E-IN"],
            "IPC3625": ["TR-UP06-IN For Bullet", "TR-A01-IN", "TR-JB03-I-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN",],
            "IPC3614SR3-ADF28(40)KMC-DL": ["TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-UP06-IN", "TR-A01-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN"],
            "TIC6831ER": ["TR-CE45-IN", "TR-WE45-A-IN", "TR-JB12-IN", "TR-UP08-A-IN", "TR-UP08-B-IN", "TR-UC08-A-IN", "TR-UC08-B-IN"],
            "UAC-B11x": ["TR-JB05-A-IN", "TR-UP06-B-IN", "TR-UP06-C-IN", "TR-A01-IN", "TR-UC08-C", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU", "PWR-DC1201B-UK", "PWR-DC1201B-US", "PWR-DC1201B-EU", "PWR-DC1201A-IND"],
            "UAC-B12x": ["TR-JB05-B-IN", "TR-JB06-IN", "TR-UP06-C-IN", "TR-A01-IN", "TR-UC08-C", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU","PWR-DC1201B-UK", "PWR-DC1201B-US", "PWR-DC1201B-EU", "PWR-DC1201A-IND"],
            "UAC-B13x": ["TR-JB05-B-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-UC08-C", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU"],
            "UAC-B13": ["TR-JB05-B-IN", "TR-A01-IN", "TR-UP06-C-IN", "TR-UC08-C", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU","PWR-DC1201A-IND"],
            "UAC-T11x": ["TR-JB03-I-IN", "TR-UP06-IN", "TR-A01-IN", "TR-WM07P-B", "TR-WM03-D-IN", "TR-JB07/WM03-G-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU", "TR-UC08-C", "PWR-DC1201B-UK", "PWR-DC1201B-US", "PWR-DC1201B-EU", "PWR-DC1201A-IND"],
            "UAC-T122": ["TR-JB03-G-IN", "TR-WM03-D-IN", "TR-JB07/WM03-G-IN"],
            "UAC-T12x": ["TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-UP06-IN For Bullet", "TR-A01-IN", "TR-UC08-C", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU","PWR-DC1201B-UK", "PWR-DC1201B-US", "PWR-DC1201B-EU", "PWR-DC1201A-IND"],
            "UAC-D11x": ["TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-UP06-IN For Bullet", "TR-A01-IN", "TR-UC08-C", "TR-UM06-E-IN", "TR-WM07P-B", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU"],
            "UAC-D12x": ["TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-UP06-IN For Bullet", "TR-A01-IN", "TR-UC08-C", "TR-UM06-E-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU","PWR-DC1201B-UK", "PWR-DC1201B-US", "PWR-DC1201B-EU", "PWR-DC1201A-IND"],
            "UAC-P112": ["PWR-DC1201A-UK", "PWR-DC1201A-US", "PWR-DC1201A-EU"],
            "IPC28184EA": ["TR-CM06-IN", "TR-UV06-A-IN", "TR-UP06-IN"],
            "IPC2B1xSS": ["TR-JB07-D-IN", "TR-JB06-A-IN", "TR-UP06-B-IN", "TR-UP06-C-IN", "TR-A01-IN", "TR-UC08-C"],
            "IPC32xSS": ["TR-JB03-G-IN", "TR-JB07/WM03-G-IN", "TR-WM03-D-IN", "TR-UM06-E-IN", "TR-UP06-IN", "TR-A01-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-UC08-C"],
            "IPC322xSS":["TR-JB08", "TR-A01-IN", "TR-CM24-IN", "TR-SE24-IN", "TR-SE24-A-IN"],
            "IPC361xSS": ["TR-JB03-H-IN", "TR-JB07/WM03-F-IN", "TR-WM03-B-IN", "TR-UP06-IN", "TR-A01-IN", "TR-SE24-IN", "TR-SE24-A-IN", "TR-CM24-IN", "TR-UC08-C"]
        },
        html = "";

    function setup(a, id) {
        var bid = id || "AccBox";
        if (!c[a]) { return false; }
        var n = c[a].length;
        html += '<div class="acc"><ul>';
        for (var i = 0; i < n; i++) {if(ds[c[a][i]]) {html += '<li><a href="/Products/Accessories' + ds[c[a][i]]["link"] + '"><div class="img"><img src="/res' + ds[c[a][i]]["img"] + '" alt="" /></div><span><strong>' + c[a][i] + '</strong><br>' + ds[c[a][i]]["desc"] + '</span></a></li>';} }
        html += '</ul></div>';
        $("#" + bid).html(html);
    }

    function set(a, id) {
        var bid = id || "AccBox";
        if (!c[a]) { return false; }
        var n = c[a].length;
        html += '<div class="item3 wr"><div class="list wr f-cb">';
        for (var i = 0; i < n; i++) {
        	if(ds[c[a][i]]) {
            html += '<a class="li" href="/Products/Accessories' + ds[c[a][i]]["link"] + '"><div class="img"><img src="/res' + ds[c[a][i]]["img"] + '" alt="" class="tran-middle"></div><div class="tit-20">' + c[a][i] + '</div><div class="tit-16">' + ds[c[a][i]]["desc"] + '</div></a>';
            }
        }
        html += '</div></div>';
        $("#" + bid).html(html);
    }
    return { setup: setup, set: set }
}

function initTab() {
    var hash;

    function setTab(n) {
        var i = n,
            hash = $("#ProductTab > a:eq(" + i + ")").attr("href");
        hash = hash.replace("#", "#~");
        $("#ProductTab > a").eq(n).stop(true, false).addClass('act').siblings().stop(true, false).removeClass('act');
        $("#ProductDetail > li").eq(n).stop(true, false).slideDown().siblings().stop(true, false).slideUp();
        window.location.hash = hash;
    }

    $("#ProductTab > a").on('click', function() {
        var i = $(this).index();
        setTab(i);
        return false;
    });

    hash = window.location.hash;
    if (hash && hash.indexOf("~") > 0) {
        tab = decodeURIComponent(hash.substring(2));
        $("#ProductTab > a").removeClass("act");
        document.getElementById(tab).className = "act";
        $("#ProductDetail > li").hide();
        document.getElementById("info-" + tab).style.display = "block";
    } else {
        $("#ProductTab > a").removeClass("act").eq(0).addClass("act");
        $("#ProductDetail > li:eq(0)").show();
    }
    if ($("#Key-features") && ($("#Key-features > li").html() != "")) {
        $("#Key-features").show();
    }
    if ($("#Head-Menu")) {
        $("#Head-Menu").addClass("act3");
    }
}

function IsPC() {
    var userAgent = window.navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgent.indexOf(Agents[v]) > -1) { flag = false; break; }
    }
    return flag;
}
var DetailPage = function() {
    function codeInit(sort) {
        var html = "",
            size, route;
        if (sort != undefined) {
            size = photoCollections[sort]["size"];
            route = photoCollections[sort]["route"];
            if (size < 1) return;
            for (var i = 1; i <= size; i++) {
                html += '<div class="swiper-slide"><div class="img"><IMG border=0 src="' + route + '/' + i + '.jpg"></div></div>'
            }
        } else {
            html = '<div class="swiper-slide"><div class="img">' + $("#MainPhoto").html() + '</div></div>'
        }
        $("#ZoomList").append(html);
        thumbnail_Swiper();
    }

    function thumbnail_Swiper() {
        var swiper3 = new Swiper('.swiper3', {
            speed: 1000,
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 10,
            autoplayDisableOnInteraction: false,
            onlyExternal: true,
            prevButton: '.prev3',
            nextButton: '.next3',

        });
        $(".swiper3 .swiper-slide:nth-child(1)").addClass('act');
        $(".swiper3 .swiper-slide").on('click', function() {
            $(this).stop(true, false).addClass('act').siblings().stop(true, false).removeClass('act');
            var imgsrc = $(this).find('img')[0].src;
            $("#MainPhoto img").attr({ src: imgsrc });
        });
    }

    function gettype(a) {
        var t = Object.prototype.toString,
            s;
        s = t.call(a);
        if (s == "[object String]") { return a.substring(1).split(" ").reverse(); }
        if (s == "[object Array]") { return a; }
        //console.log("error");
        return false;
    }

    function thumbnail(a) {
        var len = a.length,
            html = "";
        if (len < 1) return;
        for (var i = 0; i < len; i++) {
            if (a[i] != "") {
                html += '<div class="swiper-slide"><div class="img"><IMG border=0 src="' + a[i] + '"></div></div>'
            }
        }
        $("#ZoomList").append(html);
        thumbnail_Swiper();
    }

    return {
        thumbnail: function(a) {
            thumbnail(gettype(a));
        },
        init: function(sort) {
            codeInit(sort);
        }
    }
}

function statementIntall() {
    var $node = $("#ProductDetail>li"),
        $new_node = $(".p-contlist > .Features");
    if ($node) { $node.eq(0).append("<p>" + decodeURIComponent("The%20terms%20HDMI%2C%20HDMI%20High-Definition%20Multimedia%20Interface%2C%20HDMI%20Trade%20dress%20and%20the%20HDMI%20Logos%20are%20trademarks%20or%20registered%20trademarks%20of%20HDMI%20Licensing%20Administrator%2C%20Inc.%20%3Cimg%20alt%3D''%20src%3D'%2Fres%2F202103%2F10%2F20210310_1789252_hdmi_804426_140493_0.jpg'%20width%3D'100'%20height%3D'24'%20style%3D'display%3Ainline%3B'%3E" ) + "</p>"); }
    if ($new_node) { $new_node.append("<p>" + decodeURIComponent("The%20terms%20HDMI%2C%20HDMI%20High-Definition%20Multimedia%20Interface%2C%20HDMI%20Trade%20dress%20and%20the%20HDMI%20Logos%20are%20trademarks%20or%20registered%20trademarks%20of%20HDMI%20Licensing%20Administrator%2C%20Inc.%20%3Cimg%20alt%3D''%20src%3D'%2Fres%2F202103%2F10%2F20210310_1789252_hdmi_804426_140493_0.jpg'%20width%3D'100'%20height%3D'24'%20style%3D'display%3Ainline%3B'%3E" ) + "</p>"); }
}