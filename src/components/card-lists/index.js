import React from "react"
import { Card } from "../card"
import * as entities from "../../data/entities.json"
export const CardLists = () => {
    return (
        <React.Fragment>
            {entities.default.map(entity => {
                return <Card key={entity.name} entity={entity} />
            })}
        </React.Fragment>
    )
}