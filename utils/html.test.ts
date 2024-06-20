import { escape, unescape } from "./html";

describe("escape html", () => {
  const text = "fred, barney, & pebbles";
  const thmlTag = "<h2>hello jest</h2>";

  it("should use a html `RegExp` escape", () => {
    expect(escape(text)).toEqual("fred, barney, &amp; pebbles");
  });
  it("should use a htmlTag `RegExt` escape", () => {
    expect(escape(thmlTag)).toEqual("&lt;h2&gt;hello jest&lt;/h2&gt;");
  });
});

describe("unescape html", () => {
  const text = "fred, barney, &amp; pebbles";
  const htmlTagRegExp =
    "&lt;div className=&quot;bg-blue-500&quot;&gt;bye jest&lt;/div&gt;";

  it("should use a html `RegExp` unescape", () => {
    expect(unescape(text)).toEqual("fred, barney, & pebbles");
  });

  it("should use a htmlTagRegExp `RegExp` unescape", () => {
    expect(unescape(htmlTagRegExp)).toEqual(
      '<div className="bg-blue-500">bye jest</div>'
    );
  });
});
