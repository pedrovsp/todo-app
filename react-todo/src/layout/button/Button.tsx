import React from 'react'
import If from '../../utils/If'

interface Props {
    hide?: boolean;
    styles: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon: string;
}

const Button = (props: Props) => {
    return (
        <If condition={!props.hide}>
            <button className={`btn btn-${props.styles}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </If>
    )
}

export default Button
