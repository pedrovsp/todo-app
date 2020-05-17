export default (props) => {
    let elseChild = null;
    let ifChild = null;

    if (Array.isArray(props.children)) {
        elseChild = props.children.filter(child => {
            return child.type && child.type.name === 'Else'
        })[0];

        ifChild = props.children.filter(child => {
            return child.type && child.type.name !== 'Else'
        });

    } else {
        if (props.children.type && props.children.name === 'Else') {
            elseChild = props.children;
        } else {
            ifChild = props.children;
        }
    }


    if (props.condition) {
        return ifChild;
    } else if (elseChild) {
        return elseChild;
    } else {
        return false;
    }
}
export const Else = (props) => props.children