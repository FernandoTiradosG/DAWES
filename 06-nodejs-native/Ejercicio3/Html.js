function descomponerURL(url) {
    const parts = {};
    const [protocol, rest] = url.split('://');

    if (protocol) {
        parts.protocol = protocol;
        const [adressPart, queryPart] = rest.split('?');
        const [adress, args] = [adressPart, queryPart].map(part => part || '');

        const adressParts = adress.split('/');
        const domainParts = adressParts[0].split('.');

        const isIPAdress = (str) => {
            const parts = str.split('.');
            return parts.length === 4 && parts.every(part => /^\d+$/.test(part) && parseInt(part) >= 0 && parseInt(part) <= 255);
        }

        if (isIPAdress(domainParts[0])) {
            parts.ipAdress = domainParts.join('.');
            parts.subDomain = null;
            parts.domainName = null;
        } else {

            const isPotentialIPAddress = domainParts.length === 4 && domainParts.every(part => /^\d+$/.test(part));

            if (isPotentialIPAddress) {
                if(parseInt(domainParts[2]) > 1){
                    parts.ipAdress = null;
                    parts.subDomain = null;
                    parts.domainName = domainParts.join('.');
                }else {
                    parts.ipAdress = domainParts.join('.');
                    parts.subDomain = null;
                    parts.domainName = null;
                }
            } else {
                parts.ipAdress = null;
                parts.subDomain = domainParts.length > 2 ? domainParts.slice(0, -2).join('.') : null;
                parts.domainName = domainParts.slice(-2).join('.');
            }
        }


        parts.folderTree = adressParts.slice(1, -1);
        parts.folderTree = parts.folderTree.length > 0 ? parts.folderTree : null;
        parts.targetFile = adressParts.slice(-1)[0] || null;
        
        if (args) {
            parts.argumentsFile = `?${args}`;
        } else {
            parts.argumentsFile = null;
        }
    } else {
        console.error('La URL proporcionada no es válida.');
    }

    return parts;
}

const url = 'https://192.168.256.1/index.html';

const partesURL = descomponerURL(url);

if (partesURL) {
    console.log(partesURL);
}