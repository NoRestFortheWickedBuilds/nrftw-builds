
// Updated spacing - Bow Build

import React from "react";

export default function Bow() {
    return (
        <div style={{ backgroundImage: "url('/background/background-image.jpeg')", backgroundSize: "cover", minHeight: "100vh", color: "white", padding: "20px" }}>
            <h1 style={{ color: "gold", textAlign: "center" }}>Bow Build</h1>
            
            <h3 style={{ color: "#FFD700" }}>Weapons & Gear</h3>

            <h4 className="silver-gear-title">Weapon 1: [Example Weapon]</h4>
            <ul>
                <li>Runes: Example Rune 1, Example Rune 2</li>
                <li>Gem: Example Gem</li>
                <li>Enchantments:
                    <ul>
                        <li>Example Enchantment 1</li>
                        <li>Example Enchantment 2</li>
                    </ul>
                </li>
            </ul>

            <h4 className="silver-gear-title">Helmet: [Example Helmet]</h4>
            <ul>
                <li>Gem: Example Gem</li>
                <li>Enchantments:
                    <ul>
                        <li>Example Enchantment 1</li>
                        <li>Example Enchantment 2</li>
                    </ul>
                </li>
            </ul>

            <h4 className="silver-gear-title">Body Armor: [Example Armor]</h4>
            <h4 className="silver-gear-title">Gloves: [Example Gloves]</h4>
            <h4 className="silver-gear-title">Pants: [Example Pants]</h4>
            <h4 className="silver-gear-title">Ring 1: [Example Ring]</h4>
            <h4 className="silver-gear-title">Ring 2: [Example Ring]</h4>
            <h4 className="silver-gear-title">Ring 3: [Example Ring]</h4>
        </div>
    );
}
