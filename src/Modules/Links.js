const IS_SHORTSRC = /^libs_\w+/;

// Returns a link to the github's starfall source code so that the
// local url given can be used.
// You get 'properties' from the cards initial args/
// 'path' may be something like libs_sh/math.lua#L124 or <ghpath>/file.lua#L124
export default function getGitSourceLink(properties) {
    let path = properties.ghpath;
    if ( IS_SHORTSRC.test(path) ) {
        return "https://github.com/neostarfall/neostarfall/blob/master/lua/starfall/" + path;
    }
    return "https://github.com/" + path;
}
