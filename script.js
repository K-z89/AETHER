const DB = [
    { city: 'Tehran', country: 'Iran', zone: 'Asia/Tehran', flag: '🇮🇷' },
    { city: 'Kabul', country: 'Afghanistan', zone: 'Asia/Kabul', flag: '🇦🇫' },
    { city: 'Tirana', country: 'Albania', zone: 'Europe/Tirane', flag: '🇦🇱' },
    { city: 'Algiers', country: 'Algeria', zone: 'Africa/Algiers', flag: '🇩🇿' },
    { city: 'Andorra la Vella', country: 'Andorra', zone: 'Europe/Andorra', flag: '🇦🇩' },
    { city: 'Luanda', country: 'Angola', zone: 'Africa/Luanda', flag: '🇦🇴' },
    { city: 'St. John\'s', country: 'Antigua & Barbuda', zone: 'America/Antigua', flag: '🇦🇬' },
    { city: 'Buenos Aires', country: 'Argentina', zone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷' },
    { city: 'Yerevan', country: 'Armenia', zone: 'Asia/Yerevan', flag: '🇦🇲' },
    { city: 'Canberra', country: 'Australia', zone: 'Australia/Sydney', flag: '🇦🇺' },
    { city: 'Vienna', country: 'Austria', zone: 'Europe/Vienna', flag: '🇦🇹' },
    { city: 'Baku', country: 'Azerbaijan', zone: 'Asia/Baku', flag: '🇦🇿' },
    { city: 'Nassau', country: 'Bahamas', zone: 'America/Nassau', flag: '🇧🇸' },
    { city: 'Manama', country: 'Bahrain', zone: 'Asia/Bahrain', flag: '🇧🇭' },
    { city: 'Dhaka', country: 'Bangladesh', zone: 'Asia/Dhaka', flag: '🇧🇩' },
    { city: 'Bridgetown', country: 'Barbados', zone: 'America/Barbados', flag: '🇧🇧' },
    { city: 'Minsk', country: 'Belarus', zone: 'Europe/Minsk', flag: '🇧🇾' },
    { city: 'Brussels', country: 'Belgium', zone: 'Europe/Brussels', flag: '🇧🇪' },
    { city: 'Belmopan', country: 'Belize', zone: 'America/Belize', flag: '🇧🇿' },
    { city: 'Porto-Novo', country: 'Benin', zone: 'Africa/Porto-Novo', flag: '🇧🇯' },
    { city: 'Thimphu', country: 'Bhutan', zone: 'Asia/Thimphu', flag: '🇧🇹' },
    { city: 'La Paz', country: 'Bolivia', zone: 'America/La_Paz', flag: '🇧🇴' },
    { city: 'Sarajevo', country: 'Bosnia', zone: 'Europe/Sarajevo', flag: '🇧🇦' },
    { city: 'Gaborone', country: 'Botswana', zone: 'Africa/Gaborone', flag: '🇧🇼' },
    { city: 'Brasilia', country: 'Brazil', zone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { city: 'Bandar Seri Begawan', country: 'Brunei', zone: 'Asia/Brunei', flag: '🇧🇳' },
    { city: 'Sofia', country: 'Bulgaria', zone: 'Europe/Sofia', flag: '🇧🇬' },
    { city: 'Ouagadougou', country: 'Burkina Faso', zone: 'Africa/Ouagadougou', flag: '🇧🇫' },
    { city: 'Gitega', country: 'Burundi', zone: 'Africa/Bujumbura', flag: '🇧🇮' },
    { city: 'Praia', country: 'Cabo Verde', zone: 'Atlantic/Cape_Verde', flag: '🇨🇻' },
    { city: 'Phnom Penh', country: 'Cambodia', zone: 'Asia/Phnom_Penh', flag: '🇰🇭' },
    { city: 'Yaounde', country: 'Cameroon', zone: 'Africa/Douala', flag: '🇨🇲' },
    { city: 'Ottawa', country: 'Canada', zone: 'America/Toronto', flag: '🇨🇦' },
    { city: 'Bangui', country: 'CAR', zone: 'Africa/Bangui', flag: '🇨🇫' },
    { city: 'N\'Djamena', country: 'Chad', zone: 'Africa/Ndjamena', flag: '🇹🇩' },
    { city: 'Santiago', country: 'Chile', zone: 'America/Santiago', flag: '🇨🇱' },
    { city: 'Beijing', country: 'China', zone: 'Asia/Shanghai', flag: '🇨🇳' },
    { city: 'Bogota', country: 'Colombia', zone: 'America/Bogota', flag: '🇨🇴' },
    { city: 'Moroni', country: 'Comoros', zone: 'Indian/Comoro', flag: '🇰🇲' },
    { city: 'Brazzaville', country: 'Republic of Congo', zone: 'Africa/Brazzaville', flag: '🇨🇬' },
    { city: 'San Jose', country: 'Costa Rica', zone: 'America/Costa_Rica', flag: '🇨🇷' },
    { city: 'Zagreb', country: 'Croatia', zone: 'Europe/Zagreb', flag: '🇭🇷' },
    { city: 'Havana', country: 'Cuba', zone: 'America/Havana', flag: '🇨🇺' },
    { city: 'Nicosia', country: 'Cyprus', zone: 'Asia/Nicosia', flag: '🇨🇾' },
    { city: 'Prague', country: 'Czechia', zone: 'Europe/Prague', flag: '🇨🇿' },
    { city: 'Copenhagen', country: 'Denmark', zone: 'Europe/Copenhagen', flag: '🇩🇰' },
    { city: 'Djibouti', country: 'Djibouti', zone: 'Africa/Djibouti', flag: '🇩🇯' },
    { city: 'Roseau', country: 'Dominica', zone: 'America/Dominica', flag: '🇩🇲' },
    { city: 'Santo Domingo', country: 'Dominican Rep', zone: 'America/Santo_Domingo', flag: '🇩🇴' },
    { city: 'Kinshasa', country: 'DR Congo', zone: 'Africa/Kinshasa', flag: '🇨🇩' },
    { city: 'Dili', country: 'East Timor', zone: 'Asia/Dili', flag: '🇹🇱' },
    { city: 'Quito', country: 'Ecuador', zone: 'America/Guayaquil', flag: '🇪🇨' },
    { city: 'Cairo', country: 'Egypt', zone: 'Africa/Cairo', flag: '🇪🇬' },
    { city: 'San Salvador', country: 'El Salvador', zone: 'America/El_Salvador', flag: '🇸🇻' },
    { city: 'Malabo', country: 'Equatorial Guinea', zone: 'Africa/Malabo', flag: '🇬🇶' },
    { city: 'Asmara', country: 'Eritrea', zone: 'Africa/Asmara', flag: '🇪🇷' },
    { city: 'Tallinn', country: 'Estonia', zone: 'Europe/Tallinn', flag: '🇪🇪' },
    { city: 'Mbabane', country: 'Eswatini', zone: 'Africa/Mbabane', flag: '🇸🇿' },
    { city: 'Addis Ababa', country: 'Ethiopia', zone: 'Africa/Addis_Ababa', flag: '🇪🇹' },
    { city: 'Suva', country: 'Fiji', zone: 'Pacific/Fiji', flag: '🇫🇯' },
    { city: 'Helsinki', country: 'Finland', zone: 'Europe/Helsinki', flag: '🇫🇮' },
    { city: 'Paris', country: 'France', zone: 'Europe/Paris', flag: '🇫🇷' },
    { city: 'Libreville', country: 'Gabon', zone: 'Africa/Libreville', flag: '🇬🇦' },
    { city: 'Banjul', country: 'Gambia', zone: 'Africa/Banjul', flag: '🇬🇲' },
    { city: 'Tbilisi', country: 'Georgia', zone: 'Asia/Tbilisi', flag: '🇬🇪' },
    { city: 'Berlin', country: 'Germany', zone: 'Europe/Berlin', flag: '🇩🇪' },
    { city: 'Accra', country: 'Ghana', zone: 'Africa/Accra', flag: '🇬🇭' },
    { city: 'Athens', country: 'Greece', zone: 'Europe/Athens', flag: '🇬🇷' },
    { city: 'St. George\'s', country: 'Grenada', zone: 'America/Grenada', flag: '🇬🇩' },
    { city: 'Guatemala City', country: 'Guatemala', zone: 'America/Guatemala', flag: '🇬🇹' },
    { city: 'Conakry', country: 'Guinea', zone: 'Africa/Conakry', flag: '🇬🇳' },
    { city: 'Bissau', country: 'Guinea-Bissau', zone: 'Africa/Bissau', flag: '🇬🇼' },
    { city: 'Georgetown', country: 'Guyana', zone: 'America/Guyana', flag: '🇬🇾' },
    { city: 'Port-au-Prince', country: 'Haiti', zone: 'America/Port-au-Prince', flag: '🇭🇹' },
    { city: 'Tegucigalpa', country: 'Honduras', zone: 'America/Tegucigalpa', flag: '🇭🇳' },
    { city: 'Budapest', country: 'Hungary', zone: 'Europe/Budapest', flag: '🇭🇺' },
    { city: 'Reykjavik', country: 'Iceland', zone: 'Atlantic/Reykjavik', flag: '🇮🇸' },
    { city: 'New Delhi', country: 'India', zone: 'Asia/Kolkata', flag: '🇮🇳' },
    { city: 'Jakarta', country: 'Indonesia', zone: 'Asia/Jakarta', flag: '🇮🇩' },
    { city: 'Baghdad', country: 'Iraq', zone: 'Asia/Baghdad', flag: '🇮🇶' },
    { city: 'Dublin', country: 'Ireland', zone: 'Europe/Dublin', flag: '🇮🇪' },
    { city: 'Jerusalem', country: 'Israel', zone: 'Asia/Jerusalem', flag: '🇮🇱' },
    { city: 'Rome', country: 'Italy', zone: 'Europe/Rome', flag: '🇮🇹' },
    { city: 'Yamoussoukro', country: 'Ivory Coast', zone: 'Africa/Abidjan', flag: '🇨🇮' },
    { city: 'Kingston', country: 'Jamaica', zone: 'America/Jamaica', flag: '🇯🇲' },
    { city: 'Tokyo', country: 'Japan', zone: 'Asia/Tokyo', flag: '🇯🇵' },
    { city: 'Amman', country: 'Jordan', zone: 'Asia/Amman', flag: '🇯🇴' },
    { city: 'Astana', country: 'Kazakhstan', zone: 'Asia/Almaty', flag: '🇰🇿' },
    { city: 'Nairobi', country: 'Kenya', zone: 'Africa/Nairobi', flag: '🇰🇪' },
    { city: 'Tarawa', country: 'Kiribati', zone: 'Pacific/Tarawa', flag: '🇰🇮' },
    { city: 'Pristina', country: 'Kosovo', zone: 'Europe/Belgrade', flag: '🇽🇰' },
    { city: 'Kuwait City', country: 'Kuwait', zone: 'Asia/Kuwait', flag: '🇰🇼' },
    { city: 'Bishkek', country: 'Kyrgyzstan', zone: 'Asia/Bishkek', flag: '🇰🇬' },
    { city: 'Vientiane', country: 'Laos', zone: 'Asia/Vientiane', flag: '🇱🇦' },
    { city: 'Riga', country: 'Latvia', zone: 'Europe/Riga', flag: '🇱🇻' },
    { city: 'Beirut', country: 'Lebanon', zone: 'Asia/Beirut', flag: '🇱🇧' },
    { city: 'Maseru', country: 'Lesotho', zone: 'Africa/Maseru', flag: '🇱🇸' },
    { city: 'Monrovia', country: 'Liberia', zone: 'Africa/Monrovia', flag: '🇱🇷' },
    { city: 'Tripoli', country: 'Libya', zone: 'Africa/Tripoli', flag: '🇱🇾' },
    { city: 'Vaduz', country: 'Liechtenstein', zone: 'Europe/Vaduz', flag: '🇱🇮' },
    { city: 'Vilnius', country: 'Lithuania', zone: 'Europe/Vilnius', flag: '🇱🇹' },
    { city: 'Luxembourg', country: 'Luxembourg', zone: 'Europe/Luxembourg', flag: '🇱🇺' },
    { city: 'Antananarivo', country: 'Madagascar', zone: 'Indian/Antananarivo', flag: '🇲🇬' },
    { city: 'Lilongwe', country: 'Malawi', zone: 'Africa/Blantyre', flag: '🇲🇼' },
    { city: 'Kuala Lumpur', country: 'Malaysia', zone: 'Asia/Kuala_Lumpur', flag: '🇲🇾' },
    { city: 'Male', country: 'Maldives', zone: 'Indian/Maldives', flag: '🇲🇻' },
    { city: 'Bamako', country: 'Mali', zone: 'Africa/Bamako', flag: '🇲🇱' },
    { city: 'Valletta', country: 'Malta', zone: 'Europe/Malta', flag: '🇲🇹' },
    { city: 'Majuro', country: 'Marshall Islands', zone: 'Pacific/Majuro', flag: '🇲🇭' },
    { city: 'Nouakchott', country: 'Mauritania', zone: 'Africa/Nouakchott', flag: '🇲🇷' },
    { city: 'Port Louis', country: 'Mauritius', zone: 'Indian/Mauritius', flag: '🇲🇺' },
    { city: 'Mexico City', country: 'Mexico', zone: 'America/Mexico_City', flag: '🇲🇽' },
    { city: 'Palikir', country: 'Micronesia', zone: 'Pacific/Pohnpei', flag: '🇫🇲' },
    { city: 'Chisinau', country: 'Moldova', zone: 'Europe/Chisinau', flag: '🇲🇩' },
    { city: 'Monaco', country: 'Monaco', zone: 'Europe/Monaco', flag: '🇲🇨' },
    { city: 'Ulaanbaatar', country: 'Mongolia', zone: 'Asia/Ulaanbaatar', flag: '🇲🇳' },
    { city: 'Podgorica', country: 'Montenegro', zone: 'Europe/Podgorica', flag: '🇲🇪' },
    { city: 'Rabat', country: 'Morocco', zone: 'Africa/Casablanca', flag: '🇲🇦' },
    { city: 'Maputo', country: 'Mozambique', zone: 'Africa/Maputo', flag: '🇲🇿' },
    { city: 'Naypyidaw', country: 'Myanmar', zone: 'Asia/Yangon', flag: '🇲🇲' },
    { city: 'Windhoek', country: 'Namibia', zone: 'Africa/Windhoek', flag: '🇳🇦' },
    { city: 'Yaren', country: 'Nauru', zone: 'Pacific/Nauru', flag: '🇳🇷' },
    { city: 'Kathmandu', country: 'Nepal', zone: 'Asia/Kathmandu', flag: '🇳🇵' },
    { city: 'Amsterdam', country: 'Netherlands', zone: 'Europe/Amsterdam', flag: '🇳🇱' },
    { city: 'Wellington', country: 'New Zealand', zone: 'Pacific/Auckland', flag: '🇳🇿' },
    { city: 'Managua', country: 'Nicaragua', zone: 'America/Managua', flag: '🇳🇮' },
    { city: 'Niamey', country: 'Niger', zone: 'Africa/Niamey', flag: '🇳🇪' },
    { city: 'Abuja', country: 'Nigeria', zone: 'Africa/Lagos', flag: '🇳🇳' },
    { city: 'Pyongyang', country: 'North Korea', zone: 'Asia/Pyongyang', flag: '🇰🇵' },
    { city: 'Skopje', country: 'North Macedonia', zone: 'Europe/Skopje', flag: '🇲🇰' },
    { city: 'Oslo', country: 'Norway', zone: 'Europe/Oslo', flag: '🇳🇴' },
    { city: 'Muscat', country: 'Oman', zone: 'Asia/Muscat', flag: '🇴🇲' },
    { city: 'Islamabad', country: 'Pakistan', zone: 'Asia/Karachi', flag: '🇵🇰' },
    { city: 'Ngerulmud', country: 'Palau', zone: 'Pacific/Palau', flag: '🇵🇼' },
    { city: 'Ramallah', country: 'Palestine', zone: 'Asia/Hebron', flag: '🇵🇸' },
    { city: 'Panama City', country: 'Panama', zone: 'America/Panama', flag: '🇵🇦' },
    { city: 'Port Moresby', country: 'Papua New Guinea', zone: 'Pacific/Port_Moresby', flag: '🇵🇬' },
    { city: 'Asuncion', country: 'Paraguay', zone: 'America/Asuncion', flag: '🇵🇾' },
    { city: 'Lima', country: 'Peru', zone: 'America/Lima', flag: '🇵🇪' },
    { city: 'Manila', country: 'Philippines', zone: 'Asia/Manila', flag: '🇵🇭' },
    { city: 'Warsaw', country: 'Poland', zone: 'Europe/Warsaw', flag: '🇵🇱' },
    { city: 'Lisbon', country: 'Portugal', zone: 'Europe/Lisbon', flag: '🇵🇹' },
    { city: 'Doha', country: 'Qatar', zone: 'Asia/Qatar', flag: '🇶🇦' },
    { city: 'Bucharest', country: 'Romania', zone: 'Europe/Bucharest', flag: '🇷🇴' },
    { city: 'Moscow', country: 'Russia', zone: 'Europe/Moscow', flag: '🇷🇺' },
    { city: 'Kigali', country: 'Rwanda', zone: 'Africa/Kigali', flag: '🇷🇼' },
    { city: 'Basseterre', country: 'St. Kitts & Nevis', zone: 'America/St_Kitts', flag: '🇰🇳' },
    { city: 'Castries', country: 'St. Lucia', zone: 'America/St_Lucia', flag: '🇱🇨' },
    { city: 'Kingstown', country: 'St. Vincent', zone: 'America/St_Vincent', flag: '🇻🇨' },
    { city: 'Apia', country: 'Samoa', zone: 'Pacific/Apia', flag: '🇼🇸' },
    { city: 'San Marino', country: 'San Marino', zone: 'Europe/San_Marino', flag: '🇸🇲' },
    { city: 'Sao Tome', country: 'Sao Tome & Principe', zone: 'Africa/Sao_Tome', flag: '🇸🇹' },
    { city: 'Riyadh', country: 'Saudi Arabia', zone: 'Asia/Riyadh', flag: '🇸🇦' },
    { city: 'Dakar', country: 'Senegal', zone: 'Africa/Dakar', flag: '🇸🇳' },
    { city: 'Belgrade', country: 'Serbia', zone: 'Europe/Belgrade', flag: '🇷🇸' },
    { city: 'Victoria', country: 'Seychelles', zone: 'Indian/Mahe', flag: '🇸🇨' },
    { city: 'Freetown', country: 'Sierra Leone', zone: 'Africa/Freetown', flag: '🇸🇱' },
    { city: 'Singapore', country: 'Singapore', zone: 'Asia/Singapore', flag: '🇸🇬' },
    { city: 'Bratislava', country: 'Slovakia', zone: 'Europe/Bratislava', flag: '🇸🇰' },
    { city: 'Ljubljana', country: 'Slovenia', zone: 'Europe/Ljubljana', flag: '🇸🇮' },
    { city: 'Honiara', country: 'Solomon Islands', zone: 'Pacific/Guadalcanal', flag: '🇸🇧' },
    { city: 'Mogadishu', country: 'Somalia', zone: 'Africa/Mogadishu', flag: '🇸🇴' },
    { city: 'Pretoria', country: 'South Africa', zone: 'Africa/Johannesburg', flag: '🇿🇦' },
    { city: 'Seoul', country: 'South Korea', zone: 'Asia/Seoul', flag: '🇰🇷' },
    { city: 'Juba', country: 'South Sudan', zone: 'Africa/Juba', flag: '🇸🇸' },
    { city: 'Madrid', country: 'Spain', zone: 'Europe/Madrid', flag: '🇪🇸' },
    { city: 'Colombo', country: 'Sri Lanka', zone: 'Asia/Colombo', flag: '🇱🇰' },
    { city: 'Khartoum', country: 'Sudan', zone: 'Africa/Khartoum', flag: '🇸🇩' },
    { city: 'Paramaribo', country: 'Suriname', zone: 'America/Paramaribo', flag: '🇸🇷' },
    { city: 'Stockholm', country: 'Sweden', zone: 'Europe/Stockholm', flag: '🇸🇪' },
    { city: 'Bern', country: 'Switzerland', zone: 'Europe/Zurich', flag: '🇨🇭' },
    { city: 'Damascus', country: 'Syria', zone: 'Asia/Damascus', flag: '🇸🇾' },
    { city: 'Taipei', country: 'Taiwan', zone: 'Asia/Taipei', flag: '🇹🇼' },
    { city: 'Dushanbe', country: 'Tajikistan', zone: 'Asia/Dushanbe', flag: '🇹🇯' },
    { city: 'Dodoma', country: 'Tanzania', zone: 'Africa/Dar_es_Salaam', flag: '🇹🇿' },
    { city: 'Bangkok', country: 'Thailand', zone: 'Asia/Bangkok', flag: '🇹🇭' },
    { city: 'Lome', country: 'Togo', zone: 'Africa/Lome', flag: '🇹🇬' },
    { city: 'Nuku\'alofa', country: 'Tonga', zone: 'Pacific/Tongatapu', flag: '🇹🇴' },
    { city: 'Port of Spain', country: 'Trinidad & Tobago', zone: 'America/Port_of_Spain', flag: '🇹🇹' },
    { city: 'Tunis', country: 'Tunisia', zone: 'Africa/Tunis', flag: '🇹🇳' },
    { city: 'Ankara', country: 'Turkey', zone: 'Europe/Istanbul', flag: '🇹🇷' },
    { city: 'Ashgabat', country: 'Turkmenistan', zone: 'Asia/Ashgabat', flag: '🇹🇲' },
    { city: 'Funafuti', country: 'Tuvalu', zone: 'Pacific/Funafuti', flag: '🇹🇻' },
    { city: 'Kampala', country: 'Uganda', zone: 'Africa/Kampala', flag: '🇺🇬' },
    { city: 'Kyiv', country: 'Ukraine', zone: 'Europe/Kyiv', flag: '🇺🇦' },
    { city: 'Abu Dhabi', country: 'UAE', zone: 'Asia/Dubai', flag: '🇦🇪' },
    { city: 'London', country: 'UK', zone: 'Europe/London', flag: '🇬🇧' },
    { city: 'Montevideo', country: 'Uruguay', zone: 'America/Montevideo', flag: '🇺🇾' },
    { city: 'Washington DC', country: 'USA', zone: 'America/New_York', flag: '🇺🇸' },
    { city: 'Tashkent', country: 'Uzbekistan', zone: 'Asia/Tashkent', flag: '🇺🇿' },
    { city: 'Port Vila', country: 'Vanuatu', zone: 'Pacific/Efate', flag: '🇻🇺' },
    { city: 'Vatican City', country: 'Vatican', zone: 'Europe/Vatican', flag: '🇻🇦' },
    { city: 'Caracas', country: 'Venezuela', zone: 'America/Caracas', flag: '🇻🇪' },
    { city: 'Hanoi', country: 'Vietnam', zone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳' },
    { city: 'Sana\'a', country: 'Yemen', zone: 'Asia/Aden', flag: '🇾🇪' },
    { city: 'Lusaka', country: 'Zambia', zone: 'Africa/Lusaka', flag: '🇿🇲' },
    { city: 'Harare', country: 'Zimbabwe', zone: 'Africa/Harare', flag: '🇿🇼' }
];

class WorldClock {
    constructor() {
        this.grid = document.getElementById('matrix');
        this.search = document.getElementById('globalSearch');
        this.toggleBtn = document.getElementById('formatToggle');
        
        this.modal = document.getElementById('detailModal');
        this.closeModalBtn = document.querySelector('.close-modal');
        this.modalElements = {
            city: document.querySelector('.modal-city'),
            country: document.querySelector('.modal-country'),
            flag: document.querySelector('.modal-flag'),
            digital: document.querySelector('.digital-time'),
            sunrise: document.querySelector('.sun-rise'),
            sunset: document.querySelector('.sun-set'),
            hands: {
                h: document.querySelector('.hour-hand'),
                m: document.querySelector('.min-hand'),
                s: document.querySelector('.sec-hand')
            }
        };

        this.data = [...DB];
        this.fullData = [...DB];
        
        this.is24Hour = true;
        this.favorites = JSON.parse(localStorage.getItem('aether_favs')) || [];
        
        this.formatters = new Map();
        this.activeModalZone = null;
        this.modalTimer = null;

        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
        this.startEngine();
    }

    bindEvents() {
        this.search.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            this.data = this.fullData.filter(i => 
                i.city.toLowerCase().includes(term) || 
                i.country.toLowerCase().includes(term)
            );
            this.render();
        });

        this.toggleBtn.addEventListener('click', () => {
            this.is24Hour = !this.is24Hour;
            this.toggleBtn.textContent = this.is24Hour ? '24H' : '12H';
            this.formatters.clear();
            this.render();
        });

        this.closeModalBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.search.focus();
            }
            if (e.key === 'Escape') this.closeModal();
        });
    }

    toggleFavorite(zone, e) {
        e.stopPropagation();
        if (this.favorites.includes(zone)) {
            this.favorites = this.favorites.filter(z => z !== zone);
        } else {
            this.favorites.push(zone);
        }
        localStorage.setItem('aether_favs', JSON.stringify(this.favorites));
        this.render();
    }

    openModal(item) {
        this.activeModalZone = item.zone;
        this.modalElements.city.textContent = item.city;
        this.modalElements.country.textContent = item.country;
        this.modalElements.flag.textContent = item.flag;
        
        this.modal.classList.add('active');
        this.updateModal();
        
        if (this.modalTimer) cancelAnimationFrame(this.modalTimer);
        const loop = () => {
            if (this.modal.classList.contains('active')) {
                this.updateModal();
                this.modalTimer = requestAnimationFrame(loop);
            }
        };
        loop();
    }

    closeModal() {
        this.modal.classList.remove('active');
        this.activeModalZone = null;
        if (this.modalTimer) cancelAnimationFrame(this.modalTimer);
    }

    updateModal() {
        if (!this.activeModalZone) return;
        const now = new Date();
        const fmt = this.getFormatter(this.activeModalZone);
        
        this.modalElements.digital.textContent = fmt.time.format(now);

        const parts = fmt.parts.formatToParts(now);
        const h = parseInt(parts.find(p => p.type === 'hour').value);
        const m = parseInt(parts.find(p => p.type === 'minute').value);
        const s = parseInt(parts.find(p => p.type === 'second').value);

        const sDeg = ((s / 60) * 360);
        const mDeg = ((m / 60) * 360) + ((s / 60) * 6);
        const hDeg = ((h % 12) / 12 * 360) + ((m / 60) * 30);

        this.modalElements.hands.s.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
        this.modalElements.hands.m.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
        this.modalElements.hands.h.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;

        this.modalElements.sunrise.textContent = "06:15"; 
        this.modalElements.sunset.textContent = "18:45"; 
    }

    getFormatter(zone) {
        const key = `${zone}-${this.is24Hour}`;
        if (!this.formatters.has(key)) {
            this.formatters.set(key, {
                time: new Intl.DateTimeFormat('en-US', {
                    timeZone: zone, 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', 
                    hour12: !this.is24Hour 
                }),
                date: new Intl.DateTimeFormat('en-US', {
                    timeZone: zone, weekday: 'short', month: 'short', day: 'numeric'
                }),
                hourOnly: new Intl.DateTimeFormat('en-US', {
                    timeZone: zone, hour: 'numeric', hour12: false
                }),
                offset: new Intl.DateTimeFormat('en-US', {
                    timeZone: zone, timeZoneName: 'shortOffset'
                }),
                parts: new Intl.DateTimeFormat('en-US', {
                    timeZone: zone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
                })
            });
        }
        return this.formatters.get(key);
    }

    getSolarState(h) {
        const hour = parseInt(h);
        if (hour >= 6 && hour < 18) return 'day';
        if (hour >= 18 && hour < 21) return 'dusk';
        if (hour >= 5 && hour < 6) return 'dusk';
        return 'night';
    }

    createCard(item, idx) {
        const el = document.createElement('article');
        el.className = 'chronos-card';
        if (this.favorites.includes(item.zone)) el.classList.add('is-favorite');
        
        el.dataset.zone = item.zone;
        el.style.animationDelay = `${Math.min(idx * 20, 1000)}ms`;

        const displayZone = item.zone.split('/')[1].replace(/_/g, ' ');

        el.innerHTML = `
            <button class="star-btn" title="Add to Favorites">★</button>
            <div class="card-header">
                <div class="meta-group">
                    <h2 class="city-name">${item.city}</h2>
                    <p>${item.country}</p>
                </div>
                <div class="flag-icon">${item.flag}</div>
            </div>
            <div class="display-wrapper">
                <div class="display-main">--:--</div>
                <div class="display-date">Syncing...</div>
            </div>
            <div class="card-footer">
                <span>${displayZone}</span>
                <span class="offset-badge">UTC</span>
            </div>
        `;

        el.querySelector('.star-btn').addEventListener('click', (e) => this.toggleFavorite(item.zone, e));
        
        el.addEventListener('click', () => this.openModal(item));

        return el;
    }

    render() {
        this.grid.innerHTML = '';
        
        const sortedData = [...this.data].sort((a, b) => {
            const aFav = this.favorites.includes(a.zone);
            const bFav = this.favorites.includes(b.zone);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
            return 0;
        });

        if (sortedData.length === 0) {
            this.grid.innerHTML = `<div style="text-align:center;padding:4rem;opacity:0.5;">NO SECTOR FOUND</div>`;
            return;
        }

        const frag = document.createDocumentFragment();
        sortedData.forEach((item, i) => frag.appendChild(this.createCard(item, i)));
        this.grid.appendChild(frag);
        this.tick();
    }

    tick() {
        const now = new Date();
        const cards = document.getElementsByClassName('chronos-card');

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const zone = card.dataset.zone;
            if (!zone) continue;

            const fmt = this.getFormatter(zone);
            const timeStr = fmt.time.format(now);
            const dateStr = fmt.date.format(now);
            const hourStr = fmt.hourOnly.format(now);
            const offsetStr = fmt.offset.formatToParts(now).find(p => p.type === 'timeZoneName')?.value || 'UTC';

            const tEl = card.querySelector('.display-main');
            if (tEl.textContent !== timeStr) tEl.textContent = timeStr;
            
            card.querySelector('.display-date').textContent = dateStr;
            card.querySelector('.offset-badge').textContent = offsetStr;

            const state = this.getSolarState(hourStr);
            if (!card.classList.contains(state)) {
                card.classList.remove('day', 'night', 'dusk');
                card.classList.add(state);
            }
        }
    }

    startEngine() {
        const now = new Date();
        setTimeout(() => {
            this.tick();
            setInterval(() => this.tick(), 1000);
        }, 1000 - now.getMilliseconds());
    }
}

document.addEventListener('DOMContentLoaded', () => new WorldClock());
