const SaveItem = () => {
  const [objects, setObjects] = useState([]);

  const handleSave = () => {
    const data = JSON.stringify(objects);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'layout.json';
    a.click();
  };

  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setObjects(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
  };

  return (
    <div className="save-item">
      <button onClick={handleSave} className="btn">Save Layout</button>
      <input
        type="file"
        accept="application/json"
        onChange={handleLoad}
        className="file-input"
      />
    </div>
  );
};

export default SaveItem;