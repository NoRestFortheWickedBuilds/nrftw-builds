
import React from 'react';

export default function ColdMage() {
    return (
        <div style={{ backgroundImage: "url('/background/background-image.jpeg')", backgroundSize: 'cover', minHeight: '100vh', color: 'white', padding: '20px' }}>
            <h1 style={{ color: 'gold', textAlign: 'center' }}>Cold Mage Build</h1>
            
            <div style={{ textAlign: 'left', marginBottom: '20px', color: '#00BFFF', fontSize: '18px' }}>
                <p>By Larry Puss</p>
                <a href="https://youtu.be/Sj3dq73uSBs" target="_blank" rel="noopener noreferrer" style={{ color: '#00BFFF', fontSize: '18px' }}>Watch Build Guide on YouTube</a>
            </div>

            <h3 style={{ color: '#FFD700' }}>Character Stats</h3>
            <ul>
                <li>Health: 40</li>
                <li>Stamina: 10</li>
                <li>Strength: 10</li>
                <li>Dexterity: 10</li>
                <li>Intelligence: 50</li>
                <li>Faith: 10</li>
                <li>Focus: 10</li>
                <li>Equip Load: 17</li>
            </ul>

            <h3 style={{ color: '#FFD700' }}>Weapons & Gear</h3>

            <h4>Weapon 1: Endless Winter</h4>
            <ul>
                <li>Runes: Homing Frost, Frost Stream, Homing Flurry</li>
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

            <h4>Helmet: Cloth</h4>
            <ul>
                <li>Gem: Max Focus increased by 15%</li>
                <li>Enchantments:
                    <ul>
                        <li>Cold Damage increased by 25%</li>
                        <li>Focus Gain increased by 15%</li>
                        <li>+6% Health per Rune Attack</li>
                        <li>15% Weight Reduction</li>
                        <li>Can equip any Rune</li>
                    </ul>
                </li>
            </ul>

            <h4>Body Armor: Cloth</h4>
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

            <h4>Pants: Cloth</h4>
            <ul>
                <li>Gem: Max Stamina increased by 15%</li>
                <li>Enchantments:
                    <ul>
                        <li>+25% Movement Speed while above 90% Health</li>
                        <li>+30% Resistance while Standing Still</li>
                        <li>Immune to Frost Slow</li>
                        <li>15% Weight Reduction</li>
                        <li>Can equip any Rune</li>
                    </ul>
                </li>
            </ul>

            <h4>Gloves: Cloth</h4>
            <ul>
                <li>Gem: Focus Cost decreased by 10%</li>
                <li>Enchantments:
                    <ul>
                        <li>Cooldown Reduction increased by 20%</li>
                        <li>Focus Gain increased by 15%</li>
                        <li>Rune Damage increased by 25%</li>
                        <li>Indestructible</li>
                        <li>Unrepairable</li>
                    </ul>
                </li>
            </ul>

            <h4>Ring 1: Ring of Ice</h4>
            <ul>
                <li>+10 Cold Damage</li>
            </ul>

            <h4>Ring 2: Ring of Focus</h4>
            <ul>
                <li>+10 Focus Gain</li>
            </ul>
        </div>
    );
}
