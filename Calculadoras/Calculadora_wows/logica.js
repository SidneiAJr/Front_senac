function calculator() {
  // Inputs
  const base_reload_primary = Number(document.getElementById("tempobase2").value);
  const base_reload_secondary = Number(document.getElementById("tempobase").value);
  const base_range = Number(document.getElementById("alcance_base").value);
  const current_hp = Number(document.getElementById("hp_atual").value);
  const tier = Number(document.getElementById("tier").value);

  // Adrenaline Rush (scales with HP lost)
  const hp_lost = 100 - current_hp;
  const adrenaline_rush = 0.2 * (hp_lost / 100); // up to 20%

  // Fixed bonuses for secondary reload (buff1, buff2, flag)
  const buff1 = 0.20;
  const buff2 = 0.20;
  const flag_reload = 0.05;

  // Total secondary reload reduction
  const total_secondary_reduction = adrenaline_rush + buff1 + buff2 + flag_reload;

  // Final secondary reload time
  const secondary_reload_time = base_reload_secondary * (1 - total_secondary_reduction);

  // Primary reload time (with Main Battery Modification 3 module for Tier IX and X)
  let primary_time_reduction = 0;
  let reminderText = '';
  if (tier >= 9) {
    primary_time_reduction = 0.12; // -12% reload time for primary battery
    reminderText = `
      <br/><br/>
      <em>Reminder: Tier IX or X have <strong>Main Battery Modification 3</strong>:</em><br/>
      -12% to main battery loading time.<br/>
      -13% to main battery traverse speed.<br/>
      And <strong>Adrenaline Rush</strong> bonuses apply.
    `;
  }
  const primary_reload_time = base_reload_primary * (1 - primary_time_reduction);

  // Secondary range bonuses (flag + commander skill + module depending on Tier)
  let secondary_range_bonus = 0.05 + 0.20; // flag + commander skill
  if (tier >= 8) secondary_range_bonus += 0.20; // secondary module Tier VIII+

  // Final secondary range
  const final_secondary_range = base_range * (1 + secondary_range_bonus);

  // Show results with optional reminder
  document.getElementById("res").innerHTML = `
    <strong>Results:</strong><br><br>
    ⏱️ Secondary Battery Reload Time: ${secondary_reload_time.toFixed(2)} s<br>
    🔻 Total reduction applied to secondary reload: ${(total_secondary_reduction * 100).toFixed(1)}%<br><br>
    
    ⏱️ Primary Battery Reload Time: ${primary_reload_time.toFixed(2)} s<br>
    🔻 Reduction applied to primary reload: ${(primary_time_reduction * 100).toFixed(1)}%<br><br>
    
    📏 Base Secondary Range: ${base_range.toFixed(2)} km<br>
    🎯 Final Secondary Range (bonus ${(secondary_range_bonus * 100).toFixed(1)}%): ${final_secondary_range.toFixed(2)} km
    ${reminderText}
  `;
}
