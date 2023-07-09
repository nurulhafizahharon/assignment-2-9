import styles from "./Table.module.css";

function Table({ data }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>North</th>
            <th>South</th>
            <th>East</th>
            <th>West</th>
            <th>Central</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.reading.north}</td>
            <td>{data.reading.south}</td>
            <td>{data.reading.east}</td>
            <td>{data.reading.west}</td>
            <td>{data.reading.central}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
