const util = require('util');
const exec = util.promisify(require('child_process').exec);

let workspace = 'codedevbrad.reactframeit__components';

/** 
 * @param command  - add | tag | push | commit | remove
 * @param module   - the current packge being worked on.
 * @param tag_type:
 *            tag -  [ minor , major ] ,
 * 
 *            commit - [ local , remote ]
 */

const getCommand = ( { command , module , tag_type } ) => {
    switch( command ) {

        case 'add':
            return `bit add ./src/components/${module}/${module}`;

        case 'tag':
            var [ tag_type ] = vars;
            return `bit tag ${module} --${tag_type }`;

        case 'push':
            return `bit export ${workspace}`;

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
        default:
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

    var [ command , module , tag_type ] = process.argv.slice(2);

    let bitCommand = getCommand( { command , module , tag_type } );
    let a = await ExecuteCommand(`${ bitCommand}`);
    let returned = [ a ];
    Promise.all( returned );
}

// runBitCommand();

let [ data ] = process.argv.slice(2);

console.log( data );