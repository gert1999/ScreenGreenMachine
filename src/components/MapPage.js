import React from "react";
import Map from "./Map";

export class MapPage extends React.Component {
    render() {
        return (
            <div class="d-flex flex-row">
                <div><Map/></div>
                <div class="scoreBoard">Flex item 2</div>
            </div>
        )
    }
}