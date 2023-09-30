'use client';

interface SelectionProps {
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Selection: React.FC<SelectionProps> = ({setSelectedCountry, setSelectedLanguage}) => {

  const languages = [
    { code: 'ar', name: 'Arabic' },
    { code: 'de', name: 'German' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'he', name: 'Hebrew' },
    { code: 'it', name: 'Italian' },
    { code: 'nl', name: 'Dutch' },
    { code: 'no', name: 'Norwegian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'sv', name: 'Swedish' },
    { code: 'ua', name: 'Ukrainian' },
    { code: 'zh', name: 'Chinese' },
  ];

  const countries = [
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'ar', name: 'Argentina' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'be', name: 'Belgium' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'br', name: 'Brazil' },
    { code: 'ca', name: 'Canada' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'cn', name: 'China' },
    { code: 'co', name: 'Colombia' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cz', name: 'Czech Republic' },
    { code: 'de', name: 'Germany' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'gr', name: 'Greece' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'hu', name: 'Hungary' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'in', name: 'India' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lv', name: 'Latvia' },
    { code: 'ma', name: 'Morocco' },
    { code: 'mx', name: 'Mexico' },
    { code: 'my', name: 'Malaysia' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' },
    { code: 'rs', name: 'Serbia' },
    { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'se', name: 'Sweden' },
    { code: 'sg', name: 'Singapore' },
    { code: 'si', name: 'Slovenia' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'th', name: 'Thailand' },
    { code: 'tr', name: 'Turkey' },
    { code: 'tw', name: 'Taiwan' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'us', name: 'United States' },
    { code: 've', name: 'Venezuela' },
    { code: 'za', name: 'South Africa' },
  ];

  return (
    <div className='flex justify-evenly px-5 my-4'>
      <select defaultValue="en" className="select select-bordered w-full max-w-xs" onChange={e => setSelectedLanguage(e.target.value)}>
        {languages.map((lan) => (
          <option key={lan.code} value={lan.code}>{lan.name}</option>
        ))}
      </select>

      <select defaultValue="in" className="select select-bordered w-full max-w-xs" onChange={e => setSelectedCountry(e.target.value)}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>{country.name}</option>
        ))}
      </select>

      <div className='flex'>
          <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-primary">Search</button>
      </div>

    </div>
  )
}

export default Selection