const util = require('util');
const exec = util.promisify(require('child_process').exec);

let workspace = 'codedevbrad.reactframeit__components';

var [ command , module , ...vars ] = process.argv.slice(2);

const getCommand = ( ) => {
    switch( command ) {
        case 'add':
            return `bit add ./src/components/${module}/${module}`;
        break;
        case 'tag':
            var [ tag_type ] = vars;
            return `bit tag ${module} --${tag_type }`;
        break;
        case 'push':
            return `bit export ${workspace}`;
        break;
        case 'commit -unsafe':
            var [ tag_type ] = vars;
            return [
                `bit add ./src/components/${module}/${module}` ,
                `bit tag ${module} --${tag_type }` ,
                `bit export ${workspace}`
            ]
        case 'remove':
            var [ remove_type ] = vars;
            return remove_type == 'local'
                ? `bit remove ${ module }` 
                : `bit remove ${workspace} ${module} --remote`;
        break;
    }
}

async function ExecuteCommand( command) {
    try {
        const { stdout, stderr } = await exec(command);
        console.log( stdout );
    }   catch (e) {
        console.error(e); 
    }
}

async function runBitCommand( ) {
    let bitCommand = getCommand();
    let a = await ExecuteCommand(`${ bitCommand}`);
    let returned = [ a ];
    Promise.all( returned );
}

runBitCommand();