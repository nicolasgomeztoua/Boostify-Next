import React from "react";

const TrustBadge = () => {
  return (
    <div>
      {/* Trust Badge created and verified by https://www.brandpush.co */}{" "}
      <div style={{ width: "100%", marginTop: "10px", all: "unset" }}>
        <style
          scoped
          dangerouslySetInnerHTML={{
            __html:
              " .brandpush-logo-container-item { height: 100px; position: relative; } .brandpush-vertical-center { margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); text-align: center; } .brandpush-vertical-center img.brandpush-news-logo{ width: 100%; max-width: 100px; height: auto; margin: 7px 10px; } @media screen and (min-width: 585px) { .brandpush-leaf {opacity:0.2 !important;} .brandpush-logo-container{padding: 0 20px;} } @media screen and (max-width: 584px) { .brandpush-news-logo {max-width:70px !important;} .brandpush-title {font-size: 15px;top: -5px;letter-spacing: 6px;} } @media screen and (max-width: 340px) { .brandpush-title-hr { display:none; !important; } .brandpush-title {font-size:14px;padding:0 !important;} .brandpush-footer {font-size:11px !important;margin:20px 0 25px 0 !important;letter-spacing: 2px !important;} .brandpush-news-logo{max-width:50px !important;} } #brandpush-trust-badge {box-shadow: 0 18px 50px rgb(0 0 0 / 7%); -webkit-transition: box-shadow 0.3s;} ",
          }}
        />
        <div
          id="brandpush-trust-badge"
          style={{
            position: "relative",
            width: "100%",
            background: "#fff",
            borderRadius: "10px",
            minHeight: "180px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "30px 5px 15px 5px",
              fontSize: "18px",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "8px",
            }}
          >
            <div>
              <span
                className="brandpush-title-hr"
                style={{
                  borderTop: "1.5px solid #dadada",
                  position: "absolute",
                  padding: 0,
                  margin: "0 0 0 5%",
                  width: "90%",
                  top: "30px",
                  left: 0,
                  zIndex: 0,
                }}
              />
              <span
                className="brandpush-title"
                style={{
                  backgroundColor: "#fff",
                  zIndex: 1,
                  position: "relative",
                  padding: "0 20px",
                  margin: 0,
                  top: "-13px",
                }}
              >
                AS SEEN ON
              </span>
            </div>
            <div
              className="brandpush-logo-container"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              <img
                className="brandpush-leaf"
                style={{
                  position: "absolute",
                  height: "110px",
                  opacity: 0,
                  left: "25px",
                  margin: 0,
                  padding: 0,
                  zIndex: 0,
                }}
                src="data:image/png;base64,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"
              />
              <img
                className="brandpush-leaf"
                style={{
                  position: "absolute",
                  height: "110px",
                  opacity: 0,
                  right: "25px",
                  margin: 0,
                  padding: 0,
                  zIndex: 0,
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
                src="data:image/png;base64,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"
              />
              <div className="brandpush-logo-container-item">
                <div className="brandpush-vertical-center">
                  <a
                    href="http://www.wicz.com/story/45907133/boostifys-apex-predators-help-throngs-of-players-rank-up-in-apex-legends
 "
                    target="_Blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Featured on FOX News"
                      className="brandpush-news-logo"
                      style={{ marginRight: "14px" }}
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDE3IDQzMCIgd2lkdGg9IjEwMTciIGhlaWdodD0iNDMwIj48c3R5bGU+PC9zdHlsZT48ZyBpZD0ibGF5ZXIxIj48ZyBpZD0iZzE2MTQiPjxwYXRoIGlkPSJwYXRoOTkxLTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTg5NS4yMSAyMTUuMDhsMTIxLjYzIDIxNC4zNC0xNDAuMDkuMjQtNTEuNDUtOTAuOTYtNTEuNDQgOTAuOTYtMTQwLjA4LS4yNCAxMjEuNjMtMjE0LjM0TDYzMy43OCAwaDEzOS4zOGw1Mi4xNCA5MS45TDg3Ny40NiAwaDEzOS4zOEw4OTUuMjEgMjE1LjA4ek00ODMuNC4xNGMxMTguNTUgMCAyMTQuNjYgOTYuMSAyMTQuNjYgMjE0LjY0IDAgMTE4LjU0LTk2LjExIDIxNC42NC0yMTQuNjYgMjE0LjY0LTExOC41NiAwLTIxNC42Ni05Ni4xLTIxNC42Ni0yMTQuNjRDMjY4Ljc0IDk2LjI0IDM2NC44NC4xNCA0ODMuNC4xNHpNNTIxIDEyNi41M2MwLTIwLjExLTE3LjQzLTM4LjEyLTM3LjAxLTM4LjEyLTE5LjYgMC0zNS40NCAxOC4wMS0zNS40NCAzOC4xMmwtLjA0IDE3NS44M2MwIDIwLjEzIDE1Ljg4IDM2LjQzIDM1LjQ3IDM2LjQzIDE5LjU5IDAgMzcuMDItMTUuNzkgMzcuMDItMzUuOTFWMTI2LjUzek0uMDIgNDI5LjQyVjBoMjY3LjAzbDcuODcgMTE3LjEzSDEzMC4wMXY1Ni4yaDExOC4xOHYxMTcuNUgxMzAuMDF2MTM4LjU5SC4wMnoiIGZpbGw9IiMwMDAiLz48L2c+PC9nPjwvc3ZnPg=="
                    />
                  </a>
                  <a
                    href="http://finance.azcentral.com/azcentral/news/read/42204848/
 "
                    target="_Blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Featured on USA Today"
                      className="brandpush-news-logo"
                      style={{ maxWidth: "100px" }}
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIzNTAuMDAwMDAwcHQiIGhlaWdodD0iMTY4LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMzUwLjAwMDAwMCAxNjguMDAwMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTAuMDAwMDAwLDIzMC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+Cgo8cGF0aCBkPSJNMzQyNCAyMjI5IGMtOTQgLTM2IC0xNDYgLTEwOSAtMTQ2IC0yMDUgLTEgLTEwNCA1NCAtMTYzIDE5MyAtMjA5IDk0IC0zMiAxMjIgLTUyIDEyMiAtODggMCAtMzYgLTE4IC01NSAtNjAgLTYzIC00NiAtOSAtMTA5IDExIC0xNTYgNDggLTIxIDE2IC00MCAyOCAtNDEgMjcgLTEyIC0xNSAtODQgLTExNiAtODkgLTEyNiAtMTAgLTE2IDc2IC03MSAxMzggLTg4IDE1NyAtNDQgMzA4IC0xMCAzNzAgODQgMTQgMjEgMzAgNjIgMzYgOTIgMjcgMTI5IC00OCAyMjIgLTIyMCAyNzMgLTYzIDE5IC05MSA0MCAtOTEgNzEgMCAzNiAyNCA0OCA4OCA0MyAzOSAtMyA2OSAtMTEgODkgLTI2IDE3IC0xMiAzNCAtMjIgMzcgLTIyIDggMCA4NiAxMTcgODYgMTI5IDAgMTUgLTYwIDQ3IC0xMTkgNjUgLTc0IDIyIC0xNzQgMjAgLTIzNyAtNXoiLz4KPHBhdGggZD0iTTI1NTQgMjIyNiBjLTMgLTggLTQgLTEzMSAtMiAtMjczIDMgLTI0NyA0IC0yNjAgMjYgLTMwNiA0OCAtOTYgMTM5IC0xNDAgMjkyIC0xNDAgMTA4IDAgMTc5IDIyIDIzNiA3NSA3MiA2NyA3OSAxMDAgNzkgMzk4IGwwIDI1NSAtMTAwIDAgLTEwMCAwIC01IC0yNDAgYy01IC0yNjIgLTEwIC0yODQgLTY2IC0zMDUgLTUyIC0yMCAtMTIxIC0yIC0xNDAgMzcgLTUgMTAgLTExIDEyOCAtMTQgMjYzIGwtNSAyNDUgLTk4IDMgYy03OCAyIC05OCAwIC0xMDMgLTEyeiIvPgo8cGF0aCBkPSJNNDA3MSAyMjIyIGMtNSAtMTAgLTMyIC03OSAtNTkgLTE1MyAtNTMgLTE0NSAtMTg2IC01MDMgLTE5NyAtNTMxIC03IC0xNiAyIC0xOCA5NyAtMTggbDEwNCAwIDE1IDQ4IDE1IDQ3IDEzOCAwIDEzOSAwIDE0IC00NyAxNCAtNDggMTA0IDAgYzYzIDAgMTA1IDQgMTA1IDEwIDAgNSAtMTEgMzggLTI1IDcyIC0xMyAzNSAtNzAgMTg3IC0xMjYgMzM4IC01NiAxNTEgLTEwNiAyODEgLTExMSAyODggLTcgOCAtNDMgMTIgLTExNCAxMiAtOTAgMCAtMTA1IC0yIC0xMTMgLTE4eiBtMTYwIC0zMjAgYzE2IC01MSAyOSAtOTkgMjkgLTEwNyAwIC0xMiAtMTUgLTE1IC03MyAtMTUgLTQxIDAgLTc2IDIgLTc5IDUgLTMgMyAxMCA1MyAyOCAxMTAgMTkgNTggMzQgMTE1IDM0IDEyOCAwIDM4IDE0IDQxIDI0IDUgNSAtMTggMjEgLTc1IDM3IC0xMjZ6Ii8+CjxwYXRoIGQ9Ik0zNDM5IDEzODAgYy0yMjcgLTM5IC0zNTggLTI2MSAtMjg5IC00OTIgMTYgLTU2IDcwIC0xMjggMTI1IC0xNzAgNzAgLTU0IDEzOSAtNzMgMjU1IC03MiAxMjIgMSAxOTIgMjYgMjY3IDk3IDIyNyAyMTUgMTEyIDU4OCAtMTk3IDYzNyAtNzMgMTEgLTk1IDExIC0xNjEgMHogbTE2NyAtMTkxIGM5OSAtNDcgMTMxIC0yMDUgNjIgLTMwMiAtNDEgLTU4IC0xNDkgLTg0IC0yMjEgLTUzIC0zOSAxNiAtODIgNjEgLTk2IDk5IC0yNiA2OSAtMyAxODcgNDUgMjI4IDYxIDUyIDEzOSA2MyAyMTAgMjh6Ii8+CjxwYXRoIGQ9Ik0yNTUwIDEyOTAgbDAgLTc5IDg4IC0zIDg3IC0zIDMgLTI3MiAyIC0yNzMgMTA1IDAgMTA1IDAgMCAyNzUgMCAyNzUgODUgMCA4NSAwIDAgODAgMCA4MCAtMjgwIDAgLTI4MCAwIDAgLTgweiIvPgo8cGF0aCBkPSJNMzk5MCAxMDE1IGwwIC0zNTcgMjAzIDQgYzE5OCAzIDIwMyA0IDI2NCAzMiAxMjggNTkgMTkzIDE2NyAxOTMgMzIxIDAgMTE0IC0yNiAxODMgLTk0IDI1MSAtODUgODUgLTEzMSA5OCAtMzY4IDEwMiBsLTE5OCA0IDAgLTM1N3ogbTM1NiAxNzAgYzY4IC0zNCA5NCAtODAgOTQgLTE2OSAwIC0xMjUgLTU5IC0xODkgLTE3NCAtMTkwIC0zNCAtMSAtNjIgMiAtNjMgNyAtMiA0IC0zIDkwIC0zIDE5MiBsMCAxODUgNDggMCBjMzEgMCA2NiAtOSA5OCAtMjV6Ii8+CjxwYXRoIGQ9Ik00ODYyIDEyODggYy0zNyAtMTAxIC0yMTggLTU4NiAtMjI3IC02MTAgLTcgLTE2IDIgLTE4IDk3IC0xOCBsMTA0IDAgMTUgNDggMTUgNDcgMTM2IDMgMTM2IDMgMTcgLTUxIDE3IC01MCAxMDQgMCBjOTkgMCAxMDUgMSA5OSAxOSAtMyAxMSAtNjEgMTY5IC0xMjkgMzUzIGwtMTI0IDMzMyAtMTE1IDMgLTExNSAzIC0zMCAtODN6IG0xODMgLTIzMCBjMTkgLTY1IDM1IC0xMjIgMzUgLTEyOCAwIC02IC0zMyAtMTAgLTgxIC0xMCAtNjggMCAtODAgMiAtNzUgMTUgMyA5IDIwIDY0IDM3IDEyMyA0MSAxMzkgNDEgMTM5IDQ1IDEyNyAyIC01IDE5IC02MyAzOSAtMTI3eiIvPgo8cGF0aCBkPSJNNTI1MCAxMzYyIGMwIC00IDQgLTEyIDkgLTE3IDUgLTYgNjQgLTEwNCAxMzAgLTIxOSBsMTIxIC0yMDkgMCAtMTI4IDAgLTEyOSAxMTAgMCAxMTAgMCAwIDEyNiAwIDEyNyAxMzAgMjI0IGM3MiAxMjMgMTMwIDIyNiAxMzAgMjI5IDAgMyAtNDggMyAtMTA3IDIgbC0xMDggLTMgLTYzIC0xMTUgYy0zNCAtNjMgLTY2IC0xMjggLTcwIC0xNDUgLTEwIC0zNiAtMjQgLTM1IC0zNCAyIC00IDE2IC0zNiA4MCAtNzAgMTQzIGwtNjMgMTE1IC0xMTIgMyBjLTYyIDEgLTExMyAtMSAtMTEzIC02eiIvPgo8L2c+Cjwvc3ZnPg=="
                    />
                  </a>
                  <a
                    href="http://digitaljournal.com/pr/boostifys-apex-predators-help-throngs-of-players-rank-up-in-apex-legends
 "
                    target="_Blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Featured on DigitalJournal"
                      className="brandpush-news-logo"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NTEuNTkgMjI1LjA3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iMC43OSIgd2lkdGg9IjU5LjI1IiBoZWlnaHQ9IjkwIi8+PHBhdGggZD0iTTY5LjU5LDEuNGgzNC42NWEzOC44MSwzOC44MSwwLDAsMSwxNywzLjQ3LDI3LjYxLDI3LjYxLDAsMCwxLDExLjMzLDkuNzksNDIuMzYsNDIuMzYsMCwwLDEsNC44LDEzLDg2Ljg4LDg2Ljg4LDAsMCwxLDEuNjgsMTguMDcsODYuNCw4Ni40LDAsMCwxLTEuNzEsMTgsNDguNjEsNDguNjEsMCwwLDEtNC41MiwxMy4xMSwyNy42NCwyNy42NCwwLDAsMS0xMS4yMSw5Ljg2LDM3Ljg3LDM3Ljg3LDAsMCwxLTE2Ljg0LDMuNDdINjkuNTlWODMuOTFoNi4xN1Y3LjY3SDY5LjU5Wk05MS4xLDg0SDEwMXE3LjY5LDAsMTEtMi4xOSwxMS45MS03LjU1LDExLjkyLTM2LjQ1LDAtMjcuOTMtMTEuNDMtMzUuMTFhMTQuMjEsMTQuMjEsMCwwLDAtNS4wNy0yLDM3LjE1LDM3LjE1LDAsMCwwLTcuMDktLjZIOTEuMVoiLz48cGF0aCBkPSJNMTQxLjc2LDEuNEgxNzJWNy42N2gtN1Y4My45MWg3djYuMjdIMTQxLjc2VjgzLjkxaDcuODNWNy42N2gtNy44M1oiLz48cGF0aCBkPSJNMjQxLjM3LDc2Ljg1UTIzMS4wNSw5Mi4xOCwyMTIuMTYsOTEuNywxOTEsOTEuNTIsMTgyLjcxLDc3LjUydi4wNlExNzYsNjcuMDUsMTc2LDQ2LjNxMC0yMS42LDcuMDktMzIuMTJ2LjA2UTE5MSwuMTgsMjEzLjA4LDBhMzcuODEsMzcuODEsMCwwLDEsMjQuNjMsOC40NmwxLjk1LDE1LjY0aC03LjI3YTE4LjI0LDE4LjI0LDAsMCwwLTQuOTUtMTIuNzJxLTQuODktNS4xMi0xNC4zLTUuMTctMTAuNTEtLjEyLTE1LjkyLDEwdC01LjgzLDI5Ljg3cS40MiwxOS40MSw1LjYyLDI5LjQ4dDE1LjIxLDEwYTIxLjUzLDIxLjUzLDAsMCwwLDgtMS42NywxNy44MywxNy44MywwLDAsMCw2LjA4LTQuMjlWNTYuNDFoLTguNjhWNTBoMjkuMDl2Ni4zMmgtNS4zOFoiLz48cGF0aCBkPSJNMjQ4LjI0LDEuNGgzMC4xOVY3LjY3aC03VjgzLjkxaDd2Ni4yN0gyNDguMjRWODMuOTFoNy44MlY3LjY3aC03LjgyWiIvPjxwYXRoIGQ9Ik0zNDcuMjMsMS40bDIuMzIsMTYuMTJIMzQzcS0xLjQ3LTkuODUtNi45LTkuODVIMzIyLjc4VjgzLjkxaDYuMDV2Ni4yN0gzMDEuMDlWODMuOTFoNi4zNlY3LjY3SDI5NC4xOXEtNS40NCwwLTYuOTEsOS44NWgtNi42TDI4MywxLjRaIi8+PHBhdGggZD0iTTM0Mi43NSw5MC4xOFY4NGg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzJUMzc1LjIsMS40SDM4Mkw0MDguNjMsODRINDE1djYuMjFIMzg4LjUyVjg0SDM5M2wtMS44OS01LjlxLS45MS0yLjg2LTEuODMtNS42OWwtMS44NC01LjcycS0uOTItMi44OS0xLjg5LTUuOTNIMzY0Yy0uNjUsMi0xLjI4LDQtMS44Nyw1LjlzLTEuMTgsMy44LTEuNzcsNS42OS0xLjE4LDMuNzgtMS43Nyw1LjY5LTEuMjEsMy44OS0xLjg2LDZoNC42NHY2LjIxWk0zODMuNjMsNTQuNHEtMi4zMS02Ljk0LTQuNTItMTMuNjlUMzc0LjY1LDI3cS0yLjI2LDcuMDUtNC4zNCwxMy42M0wzNjYsNTQuNFoiLz48cGF0aCBkPSJNNDQyLjEsODMuOTFoMjkuMjFxNS40NCwwLDYuOTEtOS45Mmg2LjZMNDgyLjUsOTAuMThINDIwLjU5VjgzLjkxaDYuMDVWNy42N2gtNi4xN1YxLjRINDQ4VjcuNjdINDQyLjFaIi8+PHBhdGggZD0iTTgyLjEyLDExNy43OWgtNi42di02LjI3SDEwNHY2LjI3SDk3LjUydjc0LjZxLS4xMiwxNC40OC01LjQ0LDIyLjc2LTUuNTEsOC41Mi0xOS4yNSw5LjkybC0yLjY5LTUuODVxMTItLjQyLDEyLTI3LjA3WiIvPjxwYXRoIGQ9Ik0xNDIuNzQsMTEwLjA2cTM0LjQ3LDAsMzQuNDcsNDUuODJUMTQyLjgsMjAxLjc2cS0zNC40LDAtMzQuNC00NS44OFQxNDIuNzQsMTEwLjA2Wm0wLDYuMzNxLTE4Ljk0LDAtMTguOTQsMzkuNDl0MTksMzkuNTVxMTguOTQsMCwxOC45NS0zOS40OVQxNDIuNzQsMTE2LjM5WiIvPjxwYXRoIGQ9Ik0yMzIuMjYsMTExLjUyaDIwdjYuMjdIMjQ2djQ1Ljg4cTAsMzcuNzktMjksMzcuNzktMTcuMjIsMC0yNC42Mi0xMS4xNC02LTkuMTgtNi0yNi44M3YtNDUuN2gtNi4zdi02LjI3aDI3LjY5djYuMjdoLTZWMTY0cTAsMTUuMzUsMi4zOCwyMS4yNCwzLjcyLDkuODUsMTUuODMsOS44NiwxOC4zMywwLDE4LjMzLTMxLjY0VjExNy43OWgtNi4wNVoiLz48cGF0aCBkPSJNMjgwLjQ0LDE5NEgyODd2Ni4yN0gyNTguODFWMTk0bDYuMTcuMDZ2LTc2LjNoLTYuMTd2LTYuMjdoMzcuNGEzNi43NSwzNi43NSwwLDAsMSwxMC43LDEuNSwzMC45NCwzMC45NCwwLDAsMSw4LjkyLDQuMjgsMjMuMjYsMjMuMjYsMCwwLDEsNi42OSw3LjgyLDIxLjY2LDIxLjY2LDAsMCwxLDIuMzUsMTAuMTMsMjAuNDgsMjAuNDgsMCwwLDEtMS42Miw4LDI1LjE3LDI1LjE3LDAsMCwxLTQuNjEsNy4xMiwzMC43NCwzMC43NCwwLDAsMS02LDQuOCwyNS42OCwyNS42OCwwLDAsMS03LDMsNjksNjksMCwwLDAsNy44OSwxN0ExNTYuMiwxNTYuMiwwLDAsMCwzMjcuNjIsMTk0aDYuNnY2LjI3aC0xOS44YTE5MS42OSwxOTEuNjksMCwwLDEtMTMuMzgtMjAsMTgyLjI5LDE4Mi4yOSwwLDAsMS0xMC40NS0yMUgyODAuNDRabTAtNDEuMTloMTUuNDFhOS4xNiw5LjE2LDAsMCwwLDUtMS41NSwxNy45LDE3LjksMCwwLDAsNC41NS00LjQ3LDI4LjI2LDI4LjI2LDAsMCwwLDIuOS01LjcyLDE2Ljg0LDE2Ljg0LDAsMCwwLDEuMDctNS43OCwxOS41OSwxOS41OSwwLDAsMC00LTEyLjIzLDEzLjIzLDEzLjIzLDAsMCwwLTEwLjg4LTUuMzZsLTE0LC4wNloiLz48cGF0aCBkPSJNNDAxLjg2LDExNy43OVYyMDAuM2gtOC4zN0wzNTMsMTMwLjE0VjE5NGg2djYuMjdIMzM5LjcyVjE5NGg2LjE3VjExNy43OWgtNi4xN3YtNi4yN2gxOS43M2wzNS4yNiw2MC4zNlYxMTcuNzloLTZ2LTYuMjdINDA4djYuMjdaIi8+PHBhdGggZD0iTTQxMS41MiwyMDAuM3YtNi4yMWg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzF0MTMtNDEuMjZoNi43OGwyNi42NSw4Mi41N2g2LjQxdjYuMjFINDU3LjI5di02LjIxaDQuNTJsLTEuODktNS45LTEuODMtNS42OWMtLjYxLTEuODgtMS4yMy0zLjc5LTEuODQtNS43MmwtMS44OS01LjkzSDQzMi43M3EtMSwzLTEuODcsNS45dC0xLjc3LDUuNjlsLTEuNzcsNS42OXEtLjg4LDIuODctMS44Nyw2aDQuNjV2Ni4yMVptNDAuODgtMzUuNzhxLTIuMzEtNi45My00LjUyLTEzLjY5dC00LjQ2LTEzLjY5cS0yLjI2LDcuMDYtNC4zNCwxMy42M2wtNC4zNCwxMy43NVoiLz48cGF0aCBkPSJNNTA4Ljg3LDE5NGgyOS4yMXE1LjQ1LDAsNi45MS05LjkxaDYuNmwtMi4zMywxNi4xOGgtNjEuOVYxOTRoNi4wNVYxMTcuNzloLTYuMTd2LTYuMjdINTE0Ljh2Ni4yN2gtNS45M1oiLz48L2c+PC9nPjwvc3ZnPg=="
                    />
                  </a>
                  <a
                    href="https://www.newschannelnebraska.com/story/45907133/boostifys-apex-predators-help-throngs-of-players-rank-up-in-apex-legends
 "
                    target="_Blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Featured on NCN"
                      className="brandpush-news-logo"
                      style={{ maxWidth: "80px" }}
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwMCAzMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iNDEuMyA2MjUuOCAyOTA3LjcgMTcyNy4zIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDAwMDAwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTsiIHdpZHRoPSIyNTAiIGhlaWdodD0iMTUwIiB4bGluazpocmVmPSJFMDc1QjMxRi5wbmciIHRyYW5zZm9ybT0ibWF0cml4KDExLjc0OTYgMCAwIDExLjc0OTYgMzEuMjk0MSA2MTguNzc2NSkiPgo8L2ltYWdlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg0MSwyMzUzLjFIMTQ5LjNjLTU5LjcsMC0xMDgtNDguNC0xMDgtMTA4VjczMy44YzAtNTkuNyw0OC40LTEwOCwxMDgtMTA4SDI4NDFjNTkuNywwLDEwOCw0OC40LDEwOCwxMDggIHYxNTExLjNDMjk0OS4xLDIzMDQuOCwyOTAwLjcsMjM1My4xLDI4NDEsMjM1My4xeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjgwNS42LDIxMDIuNmMwLDAtMjMuMy00NC41LTQ4LjctNzguNGMtMjUuNC0zMy45LTQ0LjUtODQuNy01NS4xLTEyMC43Yy0xMC42LTM2LTUwLjgtNjcuOC00Ni42LTExNi41ICBjNC4yLTQ4LjctNi40LTIzNy40LTUwLjgtMjg3LjFjLTI1LjQtMjQuMi0yOS42LTQ5LjctMjcuNS03Ny4yYzIuMS0yNy41LTIuMS04OC45LTI5LjYtMTIwLjdjLTI3LjUtMzEuOC00Ni42LTc0LjEtNDIuNC0xNzMuNyAgYy00NC41LDAtNjcuOCwwLTY3LjgsMHMtNDYuNi05MS4xLTkzLjItOTcuNGMtNDYuNi02LjQtNzQuMS0xMC42LTg2LjgtMzMuOWMtMTIuNy0yMy4zLTM2LTYuNC02Ny44LDBjLTMxLjgsNi40LTQyLjMtMi43LTU5LjMtMTEuOSAgYy0xNi45LTkuMy02MS40LTUtNzQuMSwyMC40cy00Mi4zLDQwLjItNTUuMSw4LjVjLTEyLjctMzEuOC01MC44LTI5LjctNzQuMS00NC41Yy0yMy4zLTE0LjgtNTAuOC00Mi40LTUwLjgtNDIuNEgyNjIuM3Y3OTQuMUg0MzYgIHYtNTY3LjVoMjIyLjN2OTkuNWMwLDAsMjQzLjUtMjQ5LjksNDgwLjctNC4yYy05NS4zLDYzLjUtMjcxLjEsNDE5LjMsNjEuNCw2NTYuNWMwLDQ2LjYsMCw0Ni42LDAsNDYuNnY2LjRIOTU5Ljh2LTQ3Ni41ICBjMCwwLTE3LjYtMTI0LjktMTM0LjEtMTI3LjFjLTEwNS45LDIuMS0xNTAuNCwxMDgtMTUwLjQsMTU4LjhjMCw1MC44LDAsMjA3LjUsMCwyMDcuNWgxNjcuM3YzODEuMkgyODA1LjZ6IE0xMzU3LjIsMTM4Ni44ICBjMTU4LjgtNjUuNiwyNDcuOCw2OS45LDI0Ny44LDY5LjloMjU2LjJjLTI3LjUtMTgwLTIwMy4zLTI3NS4zLTIwMy4zLTI3NS4zdi0zMS44bDIzMC44LTIuMXY3OC4zYzAsMCwwLDAsMTQuOCwwICBjMTIuNy0yNS40LDEyOS4yLTEwMS42LDI2NC43LTkxLjFjMjI4LjcsMjcuNSwyNTYuMiwyNzkuNSwyNTYuMiwyNzkuNXY1NDQuMmgtMjQzLjVjMCwwLDAtNDAyLjQsMC00MzguNHMtMTAuNi0xNjUuMi0xMzUuNS0xNjUuMiAgYy0xMzkuOCw4LjUtMTQxLjksMTQ0LjktMTQxLjksMTQ0Ljl2NDU4LjZoLTI0NS43YzAsMCwwLDAsMC0yOS43YzE3Ny45LTg4LjksMjAzLjMtMjQ5LjksMjAzLjMtMjQ5LjlzLTE5NC44LTIuMS0yNzcuNC0yLjEgIGMtMTE0LjQsMTE0LjQtMjU2LjIsNDYuNi0zMDIuOC0yOS42QzEyMzIuMiwxNTU4LjMsMTI2OC4yLDE0MzEuMywxMzU3LjIsMTM4Ni44eiIvPgo8L3N2Zz4="
                    />
                  </a>
                  <a
                    href="https://www.marketwatch.com/press-release/boostifys-apex-predators-help-throngs-of-players-rank-up-in-apex-legends-2022-02-18
 "
                    target="_Blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Featured on Market Watch"
                      className="brandpush-news-logo"
                      style={{ maxWidth: "83px" }}
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzMuMTIgMjI1Ljg3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxwYXRoIGQ9Ik0yMTEuNDksMjcuNCwyMTAsMzQuNzhoLS40NWMtMS44OS00LjEzLTcuMTYtOS43Ni0xOC43OC05Ljc2LTE4LjgsMC0zNy45MywxNC41MS00Mi4yOSwzNy40Mi0zLjYyLDIwLDYsMzcuNjgsMjguMywzNy42OCw4LjE0LDAsMTcuNTEtMy4yNiwyMi4zOS0xMGguMzlsLTEuMyw3LjUxSDIxOWwxMy03MC4xMlptLTYuODMsMzQuOTRjLTEuNCw2Ljg3LTcuOTEsMTgtMjAuOTIsMThzLTE1LjM5LTExLjI5LTE0LjI1LTE3LjhhMjEuNjksMjEuNjksMCwwLDEsMjAuNzUtMThDMjAyLjE1LDQ0LjY3LDIwNi4xNSw1NC4wOCwyMDQuNjYsNjIuMzRaIi8+PHBhdGggZD0iTTI0My44MywyNy40aDE5LjUyTDI2MiwzNC43OGguMzlBMjEuOTEsMjEuOTEsMCwwLDEsMjgxLjg3LDI1bC00LDIxLjE1Yy05Ljc2LDAtMTcsMi4xNS0xOC45MSwxM2wtNy4xMiwzOC40M0gyMzAuNzlaIi8+PHBvbHlnb24gcG9pbnRzPSIyOTUuODkgMCAzMTYuOTEgMCAzMDcuMDIgNTIuODEgMzA3LjQxIDUyLjgxIDMzMS42OCAyNy40IDM1Ni4zNSAyNy40IDMyNC4zIDU4LjIxIDM0Mi43MSA5Ny41MSAzMTguOTMgOTcuNTEgMzA1LjM5IDYzLjcxIDMwNS4wNCA2My43MSAyOTguODggOTcuNTEgMjc3Ljc0IDk3LjUxIDI5NS44OSAwIi8+PHBhdGggZD0iTTM5MCwyNC45MmMtMjEuMjgsMC00MC4xOCwxOC4yNi00My43LDM3Ljc4LTMuODcsMjAuNzksMTAuMTYsMzcuMTksMzAuMywzNy4xOWEzOC44NCwzOC44NCwwLDAsMCwyMS02LjUxLDUyLjI1LDUyLjI1LDAsMCwwLDE3LjU0LTE3LjkzSDM5My43YTE4LjI1LDE4LjI1LDAsMCwxLTE0LDYuNTFjLTguMTMsMC0xNC4yNS00Ljg4LTEzLjg5LTEzLjI0aDUyLjY1YTI3LjksMjcuOSwwLDAsMCwxLjQ5LTUuNTNDNDIzLjkyLDQxLjk0LDQxMS40LDI0LjkyLDM5MCwyNC45MlpNMzY4Ljc0LDU0LjY5YTE5LjczLDE5LjczLDAsMCwxLDE4LjI2LTEyYzEwLjksMCwxMy41Myw3Ljg3LDEzLjUzLDEyWiIvPjxwb2x5Z29uIHBvaW50cz0iMTIwLjc4IDAgODMuNzIgNTUuNTcgODMuNDkgNTUuNTcgODMuNDkgMCA2NS41OSAwIDAgOTcuNTEgMjUuNDEgOTcuNTEgNjIuMjEgNDEuOTQgNjIuNTcgNDEuOTQgNjIuNTcgOTcuNTEgODAuNTkgOTcuNTEgMTE3LjM5IDQxLjk0IDExNy43OCA0MS45NCAxMTcuNzggOTcuNTEgMTM4LjggOTcuNTEgMTM4LjggMCAxMjAuNzggMCIvPjxwYXRoIGQ9Ik00NzMuMTIsMjcuNEg0NTkuODVsMy44Ny0yMC44OUg0NDUuMzNsLTEuNDksOGMtMS42Myw5LjE0LTcuMzksMTEuOTEtMTUsMTIuNzZoMGwtMy4yNiwxNS45MUg0MzZMNDI1Ljk0LDk3LjYxaDIwLjg5bDEwLTU0LjIxaDEzLjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyMC4zOSwxOTYuODVjLTYuODksMTUuODctMjMuMjksMjguODktNDIuMjksMjguODktMjEuMjgsMC0zNC40My0xNi43Ni0zMC42OS0zNy42OHMyMi43OC0zNy4yOSw0My45My0zNy4yOWMxOC41NCwwLDMxLjMsMTIuNCwzMS42OSwyOS41NUgzMDEuNzVhMTIuNDUsMTIuNDUsMCwwLDAtMTMuNDEtOS43NmMtOS43Ni0uNDktMTgsNy42NC0xOS45MSwxNy43NnMzLjI2LDE3LjksMTMuNDEsMTcuOWEyMCwyMCwwLDAsMCwxNi44OC05LjM3aDIxLjY3Wk0xNDYuNzEsMTAxLjEybC00MC44MywyNC43NmgxMS41NWwtMzcsNTUuNThoLS4zOVYxMjUuODhoLTE4bC0zNyw1NS41OGgtLjM2VjEyNS44OGgtMjF2OTcuNjFIMjJsMzYuODYtNTUuN2guMzl2NTUuNTdoMThsNjUuMzMtOTcuNjFoMTAuNjFabTM5Ljc2LDEyMi4yNEgxNjUuNjhsMS40LTcuNTFoLS4zOWMtNC44OCw2LjktMTQuMjUsMTAtMjIuMzksMTAtMjIuMjgsMC0zMS45Mi0xNy41MS0yOC4zLTM3LjY4LDQuMTMtMjIuNzcsMjMuNDItMzcuNDIsNDIuMjktMzcuNDIsMTEuNDksMCwxNi44OSw1LjYzLDE4Ljc4LDkuNzZoLjM2bDEuNC03LjM1aDIwLjc5Wm0tMzUuMy0xN2MxMywwLDE5LjUyLTExLjI2LDIwLjkyLTE4LDEuNS04LjM5LTIuNTEtMTcuNzYtMTQuNDEtMTcuNzZhMjEuODMsMjEuODMsMCwwLDAtMjAuNzMsMThjLTEuMTQsNi41MSwxLjUsMTcuNzcsMTQuMjUsMTcuNzdabTEwMC43Ny01My4xN2gtMTNsMy44Ny0yMC43OUgyMjQuMjhsLTEuNTMsOGMtMS42Myw5LjExLTcuMzUsMTEuODctMTUsMTIuNzVoLS4yNmwtMywxNS45MUgyMTVsLTEwLjE5LDU0LjI3aDIwLjkzbDEwLTU0LjE3aDEzLjM3Wm04OC4yNC0yNy4zOWgyMC44OGwtNi41LDM0Ljc4SDM1NWEyMS45MSwyMS45MSwwLDAsMSwxOS43NS05Ljc2YzYuNTEsMCwxNC4yOCwyLjUsMTcuOCw3Ljg3LDQuNDksNi45LDQsMTMsMS42MiwyNS41NEwzODcsMjIzLjI3SDM2Ni4wOGw3LTM4LjE3Yy42NS0zLjI1LDIuNjQtMTQuNzctOC40OS0xNC43Ny0xMS43OCwwLTEzLjc2LDEwLjUxLTE0LjQyLDE0TDM0MywyMjMuMTRIMzIyLjQxWiIvPjwvZz48L2c+PC9zdmc+"
                    />
                  </a>
                </div>
              </div>
              <div>
                <span
                  className="brandpush-footer"
                  style={{
                    textAlign: "center",
                    padding: "0 20px",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    position: "relative",
                    width: "100%",
                    margin: "0 0 8px 0",
                    display: "inline-block",
                    color: "#a5a5a5",
                  }}
                >
                  AND OVER 450 NEWS SITES
                </span>
                <div
                  style={{
                    color: "#717171",
                    fontSize: "10px",
                    letterSpacing: 0,
                    height: "15px",
                    margin: "3px 0 10px 0",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "12px", margin: "0 3px 0 0" }}
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMzMzMzMzO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfMV8iPg0KCTxwYXRoIGlkPSJYTUxJRF81XyIgY2xhc3M9InN0MCIgZD0iTTUwMS43LDIyNS43TDQ2NywxODMuMWMtNS41LTcuMS04LjctMTUtMTAuMi0yNC40bC02LjMtNTQuNGMtMi40LTIyLjEtMjAuNS00MC4yLTQyLjUtNDIuNQ0KCQlsLTU0LjQtNi4zYy05LjUtMC44LTE4LjEtNC43LTI1LjItMTAuMmwtNDIuNS0zNC43Yy0xNy4zLTE0LjItNDIuNS0xNC4yLTU5LjksMGwtNDIuNSwzNC43Yy03LjEsNS41LTE1LDguNy0yNC40LDEwLjJsLTU0LjQsNi4zDQoJCWMtMjIuMSwyLjQtNDAuMiwyMC41LTQyLjUsNDIuNWwtNi4zLDU0LjRjLTAuOCw5LjUtNC43LDE4LjEtMTAuMiwyNS4ybC0zNC43LDQyLjVjLTE0LjIsMTcuMy0xNC4yLDQyLjUsMCw1OS45bDM0LjcsNDIuNQ0KCQljNS41LDcuMSw4LjcsMTUsMTAuMiwyNC40bDYuMyw1NC40YzIuNCwyMi4xLDIwLjUsNDAuMiw0Mi41LDQyLjVsNTQuNCw2LjNjOS41LDAuOCwxOC4xLDQuNywyNS4yLDEwLjJsNDIuNSwzNC43DQoJCWMxNy4zLDE0LjIsNDIuNSwxNC4yLDU5LjksMGw0Mi41LTM0LjdjNy4xLTUuNSwxNS04LjcsMjQuNC0xMC4ybDU0LjQtNi4zYzIyLjEtMi40LDQwLjItMjAuNSw0Mi41LTQyLjVsNi4zLTU0LjQNCgkJYzAuOC05LjUsNC43LTE4LjEsMTAuMi0yNS4ybDM0LjctNDIuNUM1MTUuMSwyNjguMiw1MTUuMSwyNDMsNTAxLjcsMjI1Ljd6IE0yMDcuOSwzODRMOTYsMjcyLjFsNDgtNDhsNjMuOCw2My44TDM2Ny44LDEyOGw0OCw0OS42DQoJCUwyMDcuOSwzODR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                  />
                  <span>
                    Verified by{" "}
                    <a
                      style={{ color: "#717171" }}
                      href="https://www.brandpush.co?utm_source=Client+Referral&utm_medium=Trust+Badge&utm_campaign=Trust+Badge&utm_content=1644529715063"
                      target="_Blank" rel="noreferrer"
                    >
                      BrandPush.co
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of BrandPush Trust Badge */}
      </div>
    </div>
  );
};

export default TrustBadge;
