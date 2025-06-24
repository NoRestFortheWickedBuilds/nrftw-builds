
import React from 'react';

export default function ColdMage() {
    return (
        <div style={{ backgroundImage: "url('/background/background-image.jpeg')", backgroundSize: 'cover', minHeight: '100vh', color: 'white', padding: '20px' }}>
            <h1 style={{ color: 'gold', textAlign: 'center' }}>Cold Mage Build</h1>
            
            <div style={{ textAlign: 'left', marginBottom: '20px', color: '#00BFFF', fontSize: '18px' }}>
                <p>By Larry Puss</p>
                <a href="https://youtu.be/bZde1LrAmAE?si=f-OlHsT_Nv8G9BSa" target="_blank" rel="noopener noreferrer" style={{ color: '#00BFFF', fontSize: '18px' }}>Watch Build Guide on YouTube</a>
            </div>

            <h3 style={{ color: '#FFD700' }}>Character Stats</h3>
            <ul>
                <li>Health: 40</li>
                <li>Stamina: 10</li>
                <li>Strength: 10</li>
                <li>Dexterity: 10</li>
                <li>Intelligence: 10</li>
                <li>Faith: 10</li>
                <li>Focus: 10</li>
                <li>Equip Load: 17</li>
            </ul>

            <h3 style={{ color: '#FFD700' }}>Weapons & Gear</h3>

            <h4><span style="color: #C0C0C0;">Weapon 1:</span> Endless Winter</h4>
            <ul>
                <li>Runes: Homing Frost, Frost Stream, Homing Flurry</li>
                <li>Gem: Lifesteal</li>
                <li>Enchantments:
                    <ul>
                        <li>Damage increased by 30% against Large Enemies</li>
                        <li>Gain 15 Focus on Kill</li>
                        <li>Stamina Recovery increased by up to 25% based on Durability</li>
                        <li>Indestructible</li>
                        <li>Unrepairable</li>
                    </ul>
                </li>
            </ul>

            <h4><span style="color: #C0C0C0;">Helmet:</span> Cloth</h4>
            <ul>
                <li>Gem: Max Focus increased by 15%</li>
                <li>Enchantments:
                    <ul>
                        <li>Cold Damage increased by 25%</li>
                        <li>Gain 15 Focus on inflicint any buildup</li>
                        <li>Gain 6% Health once per Rune Attack</li>
                        <li>Item Weight decreased by 15%</li>
                        <li>Any</li>
                    </ul>
                </li>
            </ul>

            <h4><span style="color: #C0C0C0;">Body Armor:</span> Cloth</h4>
            <ul>
                <li>Gem: Max Health increased by 15%</li>
                <li>Enchantments:
                    <ul>
                        <li>Damage Taken decreased by 10% based on Durability</li>
                        <li>Focus Gain increased by up to 20% based on Durability</li>
                        <li>Frozen Enemy Armor decreased by 50%</li>
                        <li>Indestructible</li>
                        <li>Unrepairable</li>
                    </ul>
                </li>
            </ul>

            <h4><span style="color: #C0C0C0;">Gloves:</span> Cloth</h4>
            <ul>
                <li>Gem: Focus Cost decreased by 10%</li>
                <li>Enchantments:
                    <ul>
                        <li>Damage Taken decreased by 10% based on Durability</li>
                        <li>Focus Gain increased by up to 20% based on Durability</li>
                        <li>Frost Buildup increased by 30%</li>
                        <li>Indestructible</li>
                        <li>Unrepairable</li>
                    </ul>
                </li>
            </ul>

            <h4><span style="color: #C0C0C0;">Pants:</span> Cloth</h4>
            <ul>
                <li>Gem: Max Stamina increased by 15%</li>
                <li>Enchantments:
                    <ul>
                        <li>Damage Taken decreased by 10% based on Durability</li>
                        <li>Focus Gain increased by up to 20% based on Durability</li>
                        <li>Item Weight decreased by 15%</li>
                        <li>Indestructible</li>
                        <li>Unrepairable</li>
                    </ul>
                </li>
            </ul>

            <h4><span style="color: #C0C0C0;">Ring 1:</span> Ring of Broken Promises</h4>
            <h4><span style="color: #C0C0C0;">Ring 2:</span> Rune Ring</h4>
            <h4><span style="color: #C0C0C0;">Ring 3:</span> Plagued Ring</h4>
        </div>
    );
}
