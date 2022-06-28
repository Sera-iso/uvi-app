import React from 'react'
import './Recommendations.css'

export default function Recommendation({uvIndex, date}) {
    function uvRecommendation() {
        let hour = date.getHours()
        if((hour > 20 || hour < 7) && uvIndex.uvi === 0) {
            return <h3 className="no-recommendation">No precaution needed.</h3>
        } else {
        if (uvIndex.uvi < 3) {
            return (
                <div className="container recommendation">
                    <h3>Your checklist to prevent risks of skin cancer and signs of photodamage:</h3>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-prescription-bottle-medical"></i>                        
                        </div>
                        <div className="col-11">
                        Apply sunscreen min SPF 30, PA ++++
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-glasses"></i>                        
                        </div>
                        <div className="col-11">
                        Use UV blocking sunglasses
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-hat-cowboy-side"></i>                        
                        </div>
                        <div className="col-11">
                        Wear a broad brim hat
                        </div>
                    </div>
                </div>
            )
                } 
        else if (uvIndex.uvi > 2 && uvIndex.uvi < 6) {
            return (
                <div className="container recommendation">
                    <h3>Your checklist to prevent risks of skin cancer and signs of photodamage:</h3>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-prescription-bottle-medical"></i>                        
                        </div>
                        <div className="col-11">
                        Apply sunscreen SPF 50, PA ++++
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-glasses"></i>                        
                        </div>
                        <div className="col-11">
                        Use UV blocking sunglasses
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-hat-cowboy-side"></i>                        
                        </div>
                        <div className="col-11">
                        Wear a broad brim hat
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                        <i className="fa-solid fa-shirt"></i>                      
                        </div>
                        <div className="col-11">
                        Wear sun protective clothing
                        </div>
                    </div>
                </div>
            )
                } else {
                    if (uvIndex.uvi > 5 && uvIndex.uvi < 8) {
                        return (
                            <div className="container recommendation">
                                <h3>Your checklist to prevent risks of skin cancer and signs of photodamage:</h3>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-prescription-bottle-medical"></i>                        
                                    </div>
                                    <div className="col-11">
                                    Apply sunscreen SPF 50, PA ++++
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-glasses"></i>                        
                                    </div>
                                    <div className="col-11">
                                    Use UV blocking sunglasses
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-hat-cowboy-side"></i>                        
                                    </div>
                                    <div className="col-11">
                                    Wear a broad brim hat
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-shirt"></i>                      
                                    </div>
                                    <div className="col-11">
                                    Wear sun protective clothing
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-tree"></i>                      
                                    </div>
                                    <div className="col-11">
                                    Stay in the shade between 10am-2pm
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <i className="fa-solid fa-umbrella-beach"></i>                      
                                    </div>
                                    <div className="col-11">
                                    Reduce time in the sun between 10am-2pm
                                    </div>
                                </div>
                            </div>
                        )
                            }
                            else if (uvIndex.uvi > 7 && uvIndex.uvi < 11) {
                                return (
                                    <div className="container recommendation">
                                        <h3>Your checklist to prevent risks of skin cancer and signs of photodamage:</h3>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-prescription-bottle-medical"></i>                        
                                            </div>
                                            <div className="col-11">
                                            Apply sunscreen SPF 50, PA ++++
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-glasses"></i>                        
                                            </div>
                                            <div className="col-11">
                                            Use UV blocking sunglasses
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-hat-cowboy-side"></i>                        
                                            </div>
                                            <div className="col-11">
                                            Wear a broad brim hat
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-shirt"></i>                      
                                            </div>
                                            <div className="col-11">
                                            Wear sun protective clothing
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-tree"></i>                      
                                            </div>
                                            <div className="col-11">
                                            Stay in the shade between 10am-2pm
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-umbrella-beach"></i>                      
                                            </div>
                                            <div className="col-11">
                                            Reduce time in the sun between 10am-2pm
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                            <i className="fa-solid fa-house"></i>                      
                                            </div>
                                            <div className="col-11">
                                            Avoid the sun between 10am-2pm
                                            </div>
                                        </div>
                                    </div>
                                )
                                    } else {
                                        return (
                                            <div className="container recommendation">
                                                <h3>Your checklist to prevent risks of skin cancer and signs of photodamage:</h3>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-prescription-bottle-medical"></i>                        
                                                    </div>
                                                    <div className="col-11">
                                                    Apply sunscreen SPF 50, PA ++++
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-glasses"></i>                        
                                                    </div>
                                                    <div className="col-11">
                                                    Use UV blocking sunglasses
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-hat-cowboy-side"></i>                        
                                                    </div>
                                                    <div className="col-11">
                                                    Wear a broad brim hat
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-shirt"></i>                      
                                                    </div>
                                                    <div className="col-11">
                                                    Wear sun protective clothing
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-tree"></i>                      
                                                    </div>
                                                    <div className="col-11">
                                                    Stay in the shade between 10am-4pm
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-umbrella-beach"></i>                      
                                                    </div>
                                                    <div className="col-11">
                                                    Reduce time in the sun between 10am-4pm
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                    <i className="fa-solid fa-house"></i>                      
                                                    </div>
                                                    <div className="col-11">
                                                    Avoid the sun between 10am-4pm
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                            }
                                        }
                                    }
                                }
            return (
                <div>
                    {uvRecommendation()}
                </div>
    )
}
