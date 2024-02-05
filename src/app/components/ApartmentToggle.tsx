import { useApartmentToggle } from "@/app/providers/ApartmentToggleProvider";

const ApartmentToggle = () => {
  const { showApartment, toggleShowApartment } = useApartmentToggle();

  const toggleApartment = () => {
    toggleShowApartment(!showApartment);
  };

  const toggleButtonStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    cursor: 'pointer',
  };

  return (
    <button style={toggleButtonStyle} onClick={toggleApartment}>
      Show/Hide Apartment
    </button>
  );
};

export default ApartmentToggle;
