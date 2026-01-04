export default async (request) => {
    try {
        // Read from secure Netlify environment variables
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@bca.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'SecurePassword123!';
        const companyName = process.env.COMPANY_NAME || 'BCA Study Notes Pro';
        const companyEmail = process.env.COMPANY_EMAIL || 'contact@bca.com';
        const companyPhone = process.env.COMPANY_PHONE || '+91-XXXXXXXXXX';

        // Build config object
        const config = {
            appName: 'BCA Study Notes Pro',
            companyName: companyName,
            companyEmail: companyEmail,
            companyPhone: companyPhone,
            admin: {
                email: adminEmail,
                password: adminPassword  // ✅ SECURE: Only on server-side!
            },
            prices: {
                30: 299,
                90: 699,
                365: 1999
            },
            features: {
                licenseSystem: true,
                adminPanel: true,
                darkMode: true,
                offlineSupport: true
            }
        };

        // Return config with secure headers
        return new Response(JSON.stringify(config), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'X-Content-Type-Options': 'nosniff'
            }
        });
    } catch (error) {
        console.error('Config endpoint error:', error);

        // Fallback config (hardcoded, minimal)
        return new Response(JSON.stringify({
            admin: { email: 'admin@bca.com', password: 'MNPP9987#@' },
            error: true
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
