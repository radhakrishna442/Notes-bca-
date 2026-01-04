// BCA Study Notes Pro - Utility Functions
class BCAUtils {
    static generateLicenseKey() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = 'BCAKEY-';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                key += chars[Math.floor(Math.random() * chars.length)];
                if (j < 3) key += '-';
            }
        }
        return key.replace(/-$/, '');
    }

    static generateDeviceFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('BCA Notes Fingerprint', 2, 2);
        return canvas.toDataURL();
    }

    static async encryptKey(key, fingerprint) {
        const encoder = new TextEncoder();
        const data = encoder.encode(key + fingerprint);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return btoa(String.fromCharCode(...hashArray)).substring(0, 32);
    }

    static validateLicenseKey(key) {
        const regex = /^BCAKEY-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        return regex.test(key);
    }

    static getDaysRemaining(expiryDate) {
        const now = new Date();
        const expiry = new Date(expiryDate);
        const diffTime = expiry - now;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    static saveToStorage(key, data) {
        localStorage.setItem(`bca_${key}`, JSON.stringify(data));
    }

    static loadFromStorage(key) {
        try {
            return JSON.parse(localStorage.getItem(`bca_${key}`) || 'null');
        } catch {
            return null;
        }
    }

    static showMessage(type, text, duration = 5000) {
        const msg = document.createElement('div');
        msg.className = `message message-${type}`;
        msg.textContent = text;
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), duration);
    }

    static debounce(fn, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    }
}

// Global utils
window.BCAUtils = new BCAUtils();
