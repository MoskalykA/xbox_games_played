import superagent from "superagent";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
export const search = (gamerTag: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    superagent
      .get(`https://www.xboxgamertag.com/search/${gamerTag}`)
      .end((err, res) => {
        if (err) reject("An error with the request");

        const dom = new JSDOM(res.text);
        for (const span of dom.window.document.querySelectorAll("span")) {
          if (span?.textContent?.includes("Games Played")) {
            resolve(
              Number(
                span.parentNode?.textContent
                  ?.replace("Games Played", "")
                  .replace(/[\r\n]+/gm, "")
                  .replace(/\s/g, "")
              )
            );
          }
        }

        reject("The gamesPlayed was not found");
      });
  });
};
