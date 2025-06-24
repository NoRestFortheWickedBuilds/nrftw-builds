import React from "react";

export default function ColdMage() {
    return (
        <div style={{ backgroundImage: "url('/background/background-image.jpeg')", backgroundSize: "cover", minHeight: "100vh", color: "white", padding: "20px" }}>
            <h1 style={ color: "gold", textAlign: "center" }>Cold Mage Build</h1>
            <div style={{ textAlign: "left", marginBottom: "20px", color: "#00BFFF", fontSize: "18px" }}>
                <p>By Larry Puss</p>
                <a href="https://youtu.be/bZde1LrAmAE?si=f-OlHsT_Nv8G9BSa" target="_blank" rel="noopener noreferrer" style={ color: "#00BFFF", fontSize: "18px" }>Watch Build Guide on YouTube</a>
            </div>
            <h3 style={{ color: "#FFD700" }}>Weapons & Gear</h3>
            <h4 className="silver-gear-title">Weapon 1: Endless Winter</h4>
            <ul>
                <li>Rune Homing Frost</li>
                <li>Rune Frost Stream</li>
                <li>Rune Homing Flurry</li>
                <li>Gem: Lifesteal</li>
                <li>Enchantments:<ul>
                    <li>Damage increased by 30% against Large Enemies</li>
                    <li>Gain 15 Focus on Kill</li>
                    <li>Stamina Recovery increased by up to 25% based on Durability</li>
                    <li>Indestructible</li>
                    <li>Unrepairable</li>
                </ul></li>
            </ul>
            <h4 className="silver-gear-title">Helmet: Cloth</h4>
            <ul>
                <li>Gem: Max Focus increased by 15%</li>
                <li>Enchantments:<ul>
                    <li>Cold Damage increased by 25%</li>
                    <li>Gain 15 Focus on inflicting any buildup</li>
                    <li>Gain 6% Health once per Rune Attack</li>
                    <li>Item Weight decreased by 15%</li>
                    <li>Any</li>
                </ul></li>
            </ul>
            <h4 className="silver-gear-title">Body Armor: Cloth</h4>
            <ul>
                <li>Gem: Max Health increased by 15%</li>
                <li>Enchantments:<ul>
                    <li>Damage Taken decreased by 10% based on Durability</li>
                    <li>Focus Gain increased by up to 20% based on Durability</li>
                    <li>Frozen Enemy Armor decreased by 50%</li>
                    <li>Indestructible</li>
                    <li>Unrepairable</li>
                </ul></li>
            </ul>
            <h4 className="silver-gear-title">Gloves: Cloth</h4>
            <ul>
                <li>Gem: Focus Cost decreased by 10%</li>
                <li>Enchantments:<ul>
                    <li>Damage Taken decreased by 10% based on Durability</li>
                    <li>Focus Gain increased by up to 20% based on Durability</li>
                    <li>Frost Buildup increased by 30%</li>
                    <li>Indestructible</li>
                    <li>Unrepairable</li>
                </ul></li>
            </ul>
            <h4 className="silver-gear-title">Pants: Cloth</h4>
            <ul>
                <li>Gem: Max Stamina increased by 15%</li>
                <li>Enchantments:<ul>
                    <li>Damage Taken decreased by 10% based on Durability</li>
                    <li>Focus Gain increased by up to 20% based on Durability</li>
                    <li>Item Weight decreased by 15%</li>
                    <li>Indestructible</li>
                    <li>Unrepairable</li>
                </ul></li>
            </ul>
            <h4 className="silver-gear-title">Ring 1: Ring of Broken Promises</h4>
            <h4 className="silver-gear-title">Ring 2: Rune Ring</h4>
            <h4 className="silver-gear-title">Ring 3: Plagued Ring</h4>
            <h4 className="silver-gear-title">Health: 40</h4>
            <h4 className="silver-gear-title">Stamina: 10</h4>
            <h4 className="silver-gear-title">Strength: 10</h4>
            <h4 className="silver-gear-title">Dexterity: 10</h4>
            <h4 className="silver-gear-title">Intelligence: 10</h4>
            <h4 className="silver-gear-title">Faith: 55</h4>
            <h4 className="silver-gear-title">Focus: 20</h4>
            <h4 className="silver-gear-title">Equip Load: 12</h4>
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", padding: "15px", borderRadius: "10px", maxWidth: "400px", margin: "30px auto 0 auto", color: "white", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <h3 style={{ color: "#FFD700" }}>Character Stats</h3>
                <ul>
                </ul>
            </div>
        </div>
    );
}