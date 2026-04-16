'use strict';

(function () {
  const cfg = window.EC_CONFIG || {};
  if (!cfg.supabaseUrl || !cfg.supabaseKey) return;

  const client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey);
  window.EC_SUPABASE = client;

  // DB row (snake_case) → profile object (camelCase)
  function rowToProfile(row) {
    return {
      id:           row.id,
      name:         row.name,
      city:         row.city,
      district:     row.district,
      age:          row.age,
      height:       row.height,
      weight:       row.weight,
      bust:         row.bust,
      priceFrom:    row.price_from,
      phone:        row.phone,
      languages:    row.languages  || [],
      availability: row.availability,
      aboutMe:      row.about_me,
      services:     row.services   || [],
      rates:        row.rates      || [],
      photo:           row.photo,
      gallery:         row.gallery    || [],
      badges:          row.badges     || [],
      tags:            row.tags       || [],
      color:           row.color,
      phone2:          row.phone2,
      telegram:        row.telegram,
      whatsapp:        row.whatsapp,
      bodyType:        row.body_type,
      intimateHaircut: row.intimate_haircut,
      hairColor:       row.hair_color,
      appearance:      row.appearance,
      nationality:     row.nationality,
      bodyArt:         row.body_art || [],
    };
  }

  // Profile object (camelCase) → DB row (snake_case)
  function profileToRow(p) {
    return {
      name:         p.name,
      city:         p.city,
      district:     p.district,
      age:          p.age          ? Number(p.age)    : null,
      height:       p.height       ? Number(p.height) : null,
      weight:       p.weight       ? Number(p.weight) : null,
      bust:         p.bust,
      price_from:   p.priceFrom,
      phone:        p.phone,
      languages:    Array.isArray(p.languages) ? p.languages : splitCSV(p.languages),
      availability: p.availability,
      about_me:     p.aboutMe,
      services:     Array.isArray(p.services)  ? p.services  : splitCSV(p.services),
      rates:        Array.isArray(p.rates)      ? p.rates     : [],
      photo:            p.photo,
      gallery:          Array.isArray(p.gallery) ? p.gallery : splitCSV(p.gallery),
      badges:           Array.isArray(p.badges)  ? p.badges  : splitCSV(p.badges),
      tags:             Array.isArray(p.tags)    ? p.tags    : splitCSV(p.tags),
      color:            p.color,
      phone2:           p.phone2          || null,
      telegram:         p.telegram        || null,
      whatsapp:         p.whatsapp        || null,
      body_type:        p.bodyType        || null,
      intimate_haircut: p.intimateHaircut || null,
      hair_color:       p.hairColor       || null,
      appearance:       p.appearance      || null,
      nationality:      p.nationality     || null,
      body_art:         Array.isArray(p.bodyArt) ? p.bodyArt : [],
      is_active:        true,
    };
  }

  function splitCSV(val) {
    if (!val) return [];
    return String(val).split(',').map(s => s.trim()).filter(Boolean);
  }

  // ── Public API ──────────────────────────────────────────────────────────────

  async function loadProfiles() {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(rowToProfile);
  }

  async function loadAllProfiles() {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(rowToProfile);
  }

  async function saveProfile(profile) {
    const { data, error } = await client
      .from('profiles')
      .insert([profileToRow(profile)])
      .select()
      .single();
    if (error) throw error;
    return rowToProfile(data);
  }

  async function updateProfile(id, profile) {
    const { data, error } = await client
      .from('profiles')
      .update(profileToRow(profile))
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return rowToProfile(data);
  }

  async function toggleActive(id, isActive) {
    const { error } = await client
      .from('profiles')
      .update({ is_active: isActive })
      .eq('id', id);
    if (error) throw error;
  }

  async function deleteProfile(id) {
    const { error } = await client
      .from('profiles')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }

  // ── Registration Requests ───────────────────────────────────────────────────

  async function saveRequest(data) {
    const { data: row, error } = await client
      .from('registration_requests')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return row;
  }

  async function loadRequests() {
    const { data, error } = await client
      .from('registration_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async function updateRequestStatus(id, status) {
    const { error } = await client
      .from('registration_requests')
      .update({ status })
      .eq('id', id);
    if (error) throw error;
  }

  window.EC_DB = { loadProfiles, loadAllProfiles, saveProfile, updateProfile, toggleActive, deleteProfile, saveRequest, loadRequests, updateRequestStatus };
})();
