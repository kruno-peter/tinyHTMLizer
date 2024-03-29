// tinyHTMLizer.js - a Node.js module - a simple HTML generator
// htmlize(content, title, style, script) - returns a simple Web page (en)
// all arguments are optional ('content' and 'title' are dots by default)
// tip: incrementally add arguments and test the application

exports.htmlize = (content = '...', title = '...', style, script) => {

    // HTML tags
    const docType = '<!doctype html>';
    const html1 = '<html lang="en">';
    const html2 = '</html>';
    const head1 = '<head>';
    const head2 = '</head>';
    const charset = '<meta charset="utf-8">';
    const title1 = '<title>';
    const title2 = '</title>';
    const style1 = '<style>';
    const style2 = '</style>';
    const script1 = '<script>';
    const script2 = '</script>';
    const body1 = '<body>';
    const body2 = '</body>';

    // processing arguments - omitting unnecessary
    let styled = style1 + style + style2;
    if (style == undefined) {            // == works fine
        styled = '';
    }
    let scripted = script1 + script + script2;
    if (script == undefined) {
        scripted = '';
    }

    // assembling the webpage - concatenation
    let head = head1 + charset + title1 + title + title2 + styled + scripted + head2;
    let body = body1 + content + body2;
    let webPage = docType + html1 + head + body + html2;

    return webPage;

};
