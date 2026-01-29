/**
 * Configuration constants for the FACEIT CS2 Predictor extension
 */

// Extension element IDs
export const ELEMENT_IDS = {
    PREDICTIONS: "faceit-cs2-predictor-info",
    STATS_TABLE: "faceit-cs2-predictor-stats",
    ERROR_MESSAGE: "faceit-cs2-predictor-error",
    MATCHMAKING_DATA: "faceit-cs2-matchmaking-data"
};

// Extension element classes
export const ELEMENT_CLASSES = {
    STATS_TABLE_CONTAINER: "stats-table-container",
    LOADER_CONTAINER: "loader-container",
    SPINNER: "spinner",
    LOADING_MESSAGE: "loading-message",
    SHOW_ADVANCED_STATS: "show-advanced-stats",
    DROPDOWN_STYLE: "dropdown-style"
};

// Storage keys
export const STORAGE_KEYS = {
    EXTENSION_ENABLED: "faceit_cs2_predictor_extension_enabled",
    MAP_PREDICTIONS_ENABLED: "faceit_cs2_predictor_map_predictions_enabled",
    ADVANCED_STATS_ENABLED: "faceit_cs2_predictor_advanced_stats_enabled",
    MATCHMAKING_DATA_ENABLED: "faceit_cs2_predictor_matchmaking_data_enabled",
    MATCHMAKING_DATA: "faceit_cs2_predictor_matchmaking_data",
    MATCHES: "faceit_cs2_predictor_matches",
    MATCH_PREDICTION_ORDER: "faceit_cs2_predictor_match_prediction_order",
    STORAGE_CLEARED: "faceit_cs2_predictor_storage_cleared"
};

// FACEIT elements
export const FACEIT_INFO_ID = "info";

// API configuration
export const API_CONFIG = {
    BASE_URL: "https://faceit-cs2-predictor.brkovic.dev",
    SECRET_KEY: "%1q2*dxkjw*=9ldv9^#@0)(k21^1ax)99hmtj5h&_2*ud0f%k)",
    RETRY_ATTEMPTS: 10,
    RETRY_DELAY: 1000
};

// Match configuration
export const MATCH_CONFIG = {
    PREDICTIONS_FOR_FINISHED_MATCHES_ENABLED: false,
    MAX_CACHED_ITEMS: 10,
    STORAGE_VERSION: "1.0.0.24"
};

// Stats configuration
export const STATS_CONFIG = {
    DAYS_BEFORE_DEFAULT: 3,
    DAYS_BEFORE_AVAILABLE: [3, 7, 10, 14, 30],
    MAPS: ["de_ancient", "de_anubis", "de_dust2", "de_inferno", "de_mirage", "de_nuke", "de_overpass", "de_train"]
};

// Localized button texts
export const ACCEPT_LOCALIZED = [
    "ACCEPT", "수락", "AKCEPTUJ", "ПРИНЯТЬ", "ACEPTAR", "ACEITAR",
    "PŘIJMOUT", "AKZEPTIEREN", "ACCEPTER", "HYVÄKSY", "ACCEPTERA",
    "接受", "KABUL ET", "TERIMA", "ยอมรับ", "同意する", "قبول",
    "ELFOGADÁS", "PRIHVATI", "ПРИФАТИ", "ПРИЙНЯТИ"
];

// UI text
export const UI_TEXT = {
    LOADING: "Getting data...",
    PREDICTIONS_NOT_SUPPORTED: "Calculating match predictions for finished matches is not supported yet",
    SHOW_ADVANCED_STATS: "SHOW ADVANCED STATS",
    DAYS_BEFORE: "Days before",
    MAP: "Map"
};

