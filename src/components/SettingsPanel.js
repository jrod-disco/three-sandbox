import React from 'react';



class SettingsPanel extends React.Component {

    componentDidMount() {
    }

    render() {

        const { showHelpers,toggleShowHelpers } = this.props;
        
        return (
            <div style={{padding:10, width:"100%", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                <h3>Settings Panel</h3>
                <hr style={{width:"100%"}}/>
                <div style={{textAlign:"left"}}>
                    <div>Show Helpers</div>
                    <button onClick={toggleShowHelpers} >{`${showHelpers}`} </button>
                </div>
            </div>
        );
    }
}

export default SettingsPanel;
