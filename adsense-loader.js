/**
 * Load Adsense Advertisement script New
 * Fixed version with proper error handling and variable declarations
 */

// Ensure core namespace exists
if (typeof core === 'undefined') {
    window.core = {};
}
if (typeof core.utils === 'undefined') {
    core.utils = {};
}

core.utils.loadAds = function (scope = document, timeout = 600) {
    clearTimeout(window.adsTimeout);

    window.adsTimeout = setTimeout(() => {
        if (document.querySelector('script[src*="adsbygoogle.js"]')) {
            core.utils.loadAdsenseAds(scope);
            return;
        }

        var adsScript = document.createElement('script');
        adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        adsScript.async = true;
        adsScript.onload = function () {
            core.utils.loadAdsenseAds(scope);
        };
        adsScript.onerror = function () {
            console.error("Errore durante il caricamento dello script AdSense.");
        };

        var container = scope.querySelector('.page');
        if (container !== null) {
            container.appendChild(adsScript);
        } else {
            document.body.appendChild(adsScript);
        }
    }, timeout);
};

core.utils.loadAdsenseAds = function (scope = document, timeout = 600) {
    clearTimeout(window.adsenseTimeout);

    window.adsenseTimeout = setTimeout(() => {
        try {
            if (typeof window.adsbygoogle === 'undefined') {
                window.adsbygoogle = [];
            }

            var ads = scope.querySelectorAll('ins.adsbygoogle');
            
            ads.forEach(function(ad) {
                if (ad.offsetParent !== null) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            });

            if (typeof $ !== 'undefined' && typeof $.fn !== 'undefined') {
                $(scope).find("ins.adsbygoogle:visible").each(function () {
                    const ad = $(this);
                    if (!ad.data("loaded")) {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                        ad.data("loaded", true);
                    }
                });
            }
        } catch (e) {
            console.log("AdSense reload error:", e);
        }
    }, timeout);
};



