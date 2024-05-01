import { useStoreActions, useStoreState } from 'easy-peasy';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  console.log("settings");
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState({});
  const icons = useStoreState((state) => state.icons);
  const currentIcon = useStoreState((state) => state.currentIcon);
  const setCurrentIcon = useStoreActions((actions) => actions.setCurrentIcon);
  const editIcons = useStoreActions((actions) => actions.editIcons);

  useEffect(() => {
    if (currentIcon) {
      setSelectedIcon(currentIcon);
    }
  }, [currentIcon])

  const handleIconSelect = (e) => {
    const selected = icons.find((icon) => icon.id === e.target.value);
    setSelectedIcon(selected);
  }

  const handleIconSubmit = (e) => {
    e.preventDefault();
    setCurrentIcon({ ...selectedIcon, current: true });
    editIcons({ ...currentIcon, current: false })
    editIcons({ ...selectedIcon, current: true });
    setSelectedIcon({})
    navigate('/');
  }

  return (
    <main className={styles.settings}>
      <h2>Settings</h2>
      {icons.length > 0 && selectedIcon.name &&
        <form className={styles.iconSetting} >
          <label>Select Icon: </label>
          <select
            className={styles.iconSelection}
            value={selectedIcon.id}
            onChange={handleIconSelect}>
            {icons.map((icon) => (
              <option key={icon.id} value={icon.id}>{icon.name}</option>
            )
            )}
          </select>
          <button type='submit' className={styles.iconSubmit} onClick={handleIconSubmit}>Submit</button>
          <img className={styles.settingPageIcon} src={require(`../icons/${selectedIcon.name} with color.png`)} alt="setting page icon" />
          <img className={styles.settingPageIcon} src={require(`../icons/${selectedIcon.name} without color.png`)} alt="setting page icon" />
        </form>
      }
    </main>
  )
}

export default Settings
