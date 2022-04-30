import React from "react";


function Thank()
{
    return <span>THANK</span>;
}

export class ThankComp extends React.Component
{
    render()
    {
        return <span><Thank/> YOU</span>;
    }
}

export default ThankComp;