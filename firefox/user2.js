/****************************************************************************
 * Betterfox and My Config for cut all Mozilla network                                                             *
 * "Ad meliora"                                                             *
 * version: 119                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("dom.security.sanitizer.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref(
  "urlclassifier.trackingSkipURLs",
  "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"
);
user_pref(
  "urlclassifier.features.socialtracking.skipURLs",
  "*.instagram.com, *.twitter.com, *.twimg.com"
);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** PASSWORDS ***/
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.mixed_content.upgrade_display_content.image", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url","https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("cookiebanners.service.enableGlobalRules", true);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
//        My config 15/2/2024
//            My config 15/2/2024
//                My config 15/2/2024
//                    My config 15/2/2024
//                       My config 15/2/2024
//                          My config 15/2/2024
//                          My config 15/2/2024
//                          My config 15/2/2024
//                          My config 15/2/2024
//                                My config 15/2/2024
//                                  My config 15/2/2024
//                                      My config 15/2/2024
//                                          My config 15/2/2024
//                                              My config 15/2/2024
//                                                  My config 15/2/2024
 ****************************************************************************/
// Release notes and vendor URLs
user_pref("app.releaseNotesURL", "http://127.0.0.1/");
user_pref("app.vendorURL", "http://127.0.0.1/");
user_pref("app.privacyURL", "http://127.0.0.1/");

// Disable plugin installer
user_pref("plugins.hide_infobar_for_missing_plugin", true);
user_pref("plugins.hide_infobar_for_outdated_plugin", true);
user_pref("plugins.notifyMissingFlash", false);

//Speeding it up
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 10);
user_pref("nglayout.initialpaint.delay", 0);

// Disable third party cookies
user_pref("network.cookie.cookieBehavior", 1);

//privacy.firstparty.isolate
user_pref("privacy.firstparty.isolate", true);

// Tor
user_pref("network.proxy.socks", "127.0.0.1");
user_pref("network.proxy.socks_port", 9050);

// Extensions cannot be updated without permission
user_pref("extensions.update.enabled", false);

// Use LANG environment variable to choose locale
user_pref("intl.locale.matchOS", true);

// Allow unsigned langpacks
user_pref("extensions.langpacks.signatures.required", false);

// Prevent EULA dialog to popup on first run
user_pref("browser.EULA.override", true);

// Don't disable extensions dropped in to a system
// location, or those owned by the application
user_pref("extensions.autoDisableScopes", 3);

//user_pref("extensions.enabledScopes", 15);
// Don't display the one-off addon selection dialog when
// upgrading from a version of Firefox older than 8.0
user_pref("extensions.shownSelectionUI", true);

// Don't call home for blacklisting
user_pref("extensions.blocklist.enabled", false);

// disable app updater url
user_pref("app.update.url", "http://127.0.0.1/");

user_pref("startup.homepage_welcome_url", "");
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Help URL
user_pref("app.support.baseURL", "http://127.0.0.1/");
user_pref("app.support.inputURL", "http://127.0.0.1/");
user_pref("app.feedback.baseURL", "http://127.0.0.1/");
user_pref("browser.uitour.url", "http://127.0.0.1/");
user_pref("browser.uitour.themeOrigin", "http://127.0.0.1/");
user_pref("plugins.update.url", "http://127.0.0.1/");
user_pref("browser.customizemode.tip0.learnMoreUrl", "http://127.0.0.1/");

// Dictionary download user_preference
user_pref("browser.dictionaries.download.url", "http://127.0.0.1/");
user_pref("browser.search.searchEnginesURL", "http://127.0.0.1/");
user_pref("layout.spellcheckDefault", 0);

// Apturl user_preferences
user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");
user_pref("network.protocol-handler.warn-external.apt", false);
user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");
user_pref("network.protocol-handler.warn-external.apt+http", false);
user_pref("network.protocol-handler.external.apt", true);
user_pref("network.protocol-handler.external.apt+http", true);

// Quality of life stuff
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.tabs.firefox-view", false);

// Privacy & Freedom Issues
// https://webdevelopmentaid.wordpress.com/2013/10/21/customize-privacy-settings-in-mozilla-firefox-part-1-aboutconfig/
// https://panopticlick.eff.org
// http://ip-check.info
// http://browserspy.dk
// https://wiki.mozilla.org/Fingerprinting
// http://www.browserleaks.com
// http://fingerprint.pet-portal.eu
user_pref("browser.translation.engine", "");
user_pref("media.gmp-provider.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("security.OCSP.require", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.discovery.sites", "http://127.0.0.1/");
user_pref("services.sync.prefs.sync.browser.startup.homepage", false);
user_pref(
  "browser.contentblocking.report.monitor.home_page_url",
  "http://127.0.0.1/"
);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("services.sync.privacyURL", "http://127.0.0.1/");
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "http://127.0.0.1/");
user_pref("datareporting.healthreport.documentServerURI", "http://127.0.0.1/");
user_pref("healthreport.uploadEnabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.referer.spoofSource", true);

// We don't want to send the Origin header
user_pref("network.http.originextension", false);

//http://grack.com/blog/2010/01/06/3rd-party-cookies-dom-storage-and-privacy/
//user_pref("dom.storage.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("network.user_prefetch-next", false);
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("toolkit.telemetry.server", "");
user_pref("experiments.manifest.uri", "");

// Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
user_pref("plugins.enumerable_names", "");
user_pref("plugin.state.flash", 0);

// Do not autoupdate search engines
user_pref("browser.search.update", false);

// Warn when the page tries to redirect or refresh
//user_pref("accessibility.blockautorefresh", true);
user_pref("dom.battery.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);

// No search suggestions
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Always ask before restoring the browsing session
user_pref("browser.sessionstore.max_resumed_crashes", 0);

// Don't ping Mozilla for MitM detection, see <https://bugs.torproject.org/32321>
user_pref("security.certerrors.mitm.priming.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);

// Disable shield/heartbeat
user_pref("extensions.shield-recipe-client.enabled", false);

// Don't download ads for the newtab page
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.introShown", true);

// Disable tracking protection since it makes you stick out
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("urlclassifier.trackingTable","test-track-simple,base-track-digest256,content-track-digest256");
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.trackingprotection.introURL","https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/");
// Disable geolocation
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.modernConfig", false);
// Canvas fingerprint protection
// This also enables useragent spoofing
user_pref("privacy.resistFingerprinting", true);
user_pref("webgl.disabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Services
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.contentHandlers.types.1.title", "");
user_pref("browser.contentHandlers.types.1.uri", "");
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");

// Disable channel updates
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);

// EME
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);

// Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);

// WebRTC
user_pref("media.peerconnection.enabled", true);
// Don't reveal your internal IP when WebRTC is enabled
user_pref("media.peerconnection.ice.no_host", true);

// Use the proxy server to do DNS lookups when using SOCKS
// <http://kb.mozillazine.org/Network.proxy.socks_remote_dns>
user_pref("network.proxy.socks_remote_dns", true);

user_pref("font.default.x-western", "sans-serif");

// Preferences for the Get Add-ons panel
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1/");
user_pref("extensions.getAddons.search.url", "http://127.0.0.1/");
user_pref("extensions.getAddons.search.browseURL", "http://127.0.0.1/");
user_pref("extensions.getAddons.get.url", "http://127.0.0.1/");
user_pref("extensions.getAddons.link.url", "http://127.0.0.1/");
user_pref("extensions.getAddons.discovery.api_url", "http://127.0.0.1/");

user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.systemAddon.update.enabled", false);

// FIXME: find better URLs for these:
user_pref("extensions.getAddons.langpacks.url", "http://127.0.0.1/");
user_pref("lightweightThemes.getMoreURL", "http://127.0.0.1/");
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.xr.warning.infoURL", "");

// Mobile
user_pref("privacy.announcements.enabled", false);
user_pref("browser.snippets.enabled", false);
user_pref("browser.snippets.syncPromo.enabled", false);
user_pref("identity.mobilepromo.android", "http://127.0.0.1/");
user_pref("browser.snippets.geoUrl", "http://127.0.0.1/");
user_pref("browser.snippets.updateUrl", "http://127.0.0.1/");
user_pref("browser.snippets.statsUrl", "http://127.0.0.1/");
user_pref("datareporting.policy.firstRunTime", 0);
user_pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
user_pref("browser.webapps.checkForUpdates", 0);
user_pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
user_pref("app.faqURL", "http://127.0.0.1/");

// PFS url
user_pref("pfs.datasource.url", "http://127.0.0.1/");
user_pref("pfs.filehint.url", "http://127.0.0.1/");

// Disable Gecko media plugins: https://wiki.mozilla.org/GeckoMediaPlugins
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-manager.updateEnabled", false);

// Don't install openh264 codec
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);

//Disable middle click content load
//Avoid loading urls by mistake
user_pref("middlemouse.contentLoadURL", false);

//Disable heartbeat
user_pref("browser.selfsupport.url", "");

//Disable Link to FireFox Marketplace, currently loaded with non-free "apps"
user_pref("browser.apps.URL", "");

//Disable Firefox Hello
user_pref("loop.enabled", false);

// Use old style user_preferences, that allow javascript to be disabled
user_pref("browser.user_preferences.inContent", false);

// Disable home snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "data:text/html");

// In <about:user_preferences>, hide "More from Mozilla"
// (renamed to "More from GNU" by the global renaming)
user_pref("browser.user_preferences.moreFromMozilla", false);

// Disable hardware acceleration
//user_pref("layers.acceleration.disabled", false);
user_pref("gfx.direct2d.disabled", true);

// Disable SSDP
user_pref("browser.casting.enabled", false);

//Disable directory service
user_pref("social.directories", "");

// Don't report TLS errors to Mozilla
user_pref("security.ssl.errorReporting.enabled", false);

// Crypto hardening
// https://gist.github.com/haasn/69e19fc2fe0e25f3cff5
//General settings
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
user_pref("security.tls.version.min", 1);
user_pref("security.ssl.require_safe_negotiation", false);
user_pref("security.ssl3.rsa_seed_sha", true);

// Avoid logjam attack
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);

// Disable Pocket integration
user_pref("browser.pocket.enabled", false);

// enable extensions by default in private mode
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// disable screenshots extension
user_pref("extensions.screenshots.disabled", true);

// disable onboarding
user_pref("browser.onboarding.newtour","performance,private,addons,customize,default");
user_pref("browser.onboarding.updatetour","performance,library,singlesearch,customize");
user_pref("browser.onboarding.enabled", false);

// New tab settings
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");

// Enable xrender
user_pref("gfx.xrender.enabled", true);

// Disable push notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.push.enabled", false);

// Disable recommended extensions
user_pref(
  "browser.newtabpage.activity-stream.asrouter.useruser_prefs.cfr",
  false
);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);

// Disable the settings server
user_pref("services.settings.server", "");

// Disable use of WiFi region/location information
user_pref("browser.region.network.scan", false);
user_pref("browser.region.network.url", "");

// Disable VPN/mobile promos
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.privatebrowsing.promoEnabled", false);
