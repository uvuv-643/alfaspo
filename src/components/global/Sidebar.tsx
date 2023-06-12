import React from 'react'
import { PAGES } from '../../enums/Pages'
import {SidebarSelectedValues} from "../../interfaces/SidebarSelectedValues";

interface SidebarProps {
    currentPage : PAGES,
    selectedValues : SidebarSelectedValues,
    handleNext : () => void,
    handleBack ?: () => void
}

function Sidebar(props : SidebarProps) {

    let afterActive = false;
    return (
        <div className="Sidebar">
            <div className="Sidebar__Wrapper">
                {
                    Object.entries(PAGES).map((element : [string, PAGES]) => {
                        const [key, value] = element
                        if (props.currentPage === value) {
                            afterActive = true
                            return (
                                <div className="Sidebar__Item">
                                    <h4>{ value }</h4>
                                </div>
                            )
                        } else {
                            return (
                                <div className="Sidebar__Item Sidebar__Item--done">
                                    <div className="Sidebar__Item__Wrapper">
                                        <div className="Sidebar__Item__Image">
                                            {
                                                afterActive ? (
                                                    <img src="/images/sidebar/checkbox.svg" alt="#"/>
                                                ) : (
                                                    <img src="/images/sidebar/active-checkbox.svg" alt="#"/>
                                                )
                                            }
                                        </div>
                                        <div className="Sidebar__Item__Content">
                                            { afterActive ? (
                                                value
                                            ) : (
                                                props.selectedValues[value]
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })
                }
            </div>
            <div className="Sidebar__Button">
                {
                    props.currentPage !== PAGES.MATERIAL && (
                        <button onClick={props.handleBack}><img src="/images/sidebar/prev.svg" alt="#"/></button>
                    )
                }
                <button onClick={props.handleNext} className="_active">Далі <img src="/images/sidebar/next.svg" alt="#"/></button>
            </div>
        </div>
    )

}

export default Sidebar