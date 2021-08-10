// tinyHTMLizer.js - a Node.js module
// htmlize(contents, title, style, script) - returns a simple Web page (en)
// all arguments are optional (contents and title are dots by default)

exports.htmlize = (contents = '...', title = '...', style, script) => {

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

    // processing parameters
    let styled = style1 + style + style2;
    if (style == undefined) styled = '';
    let scripted = script1 + script + script2;
    if (script == undefined) scripted = '';

    // assembling the webpage
    let head = head1 + charset + title1 + title + title2 + styled + scripted + head2;
    let body = body1 + contents + body2;
    let webPage = docType + html1 + head + body + html2;

    return webPage;

};
