
let list  = (names)  =>{
    if (names[0] === undefined){
        return '';
    }
    for(let i = 0; i<names.length; i++){
        var prob = names[i];
        if((typeof(prob)) !== 'object'){
            return 'No estas introduciendo un Objeto con la forma correcta';
        }
    }
    const totalNames = [];

    if (names.length === 0) return '';
    if (names.length === 1) return names[0].name;
    if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

    names.forEach(currentObject => totalNames.push(currentObject.name));

    let initialNames = totalNames.slice(0, totalNames.length - 2).join(', ');
    const lastTwoNames = totalNames.slice(totalNames.length - 2).join(' & ');

    return `${initialNames}, ${lastTwoNames}`;
}
module.exports = list;