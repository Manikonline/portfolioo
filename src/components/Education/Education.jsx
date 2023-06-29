import './Education.css'

const Education = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className='th-color'>Degree</th>
              <th className='th-color'>Department</th>
              <th className='th-color'>Institute</th>
              <th className='th-color'>Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>BBA</th>
              <td>Finance & Banking</td>
              <td>Gov.Titumir College</td>
              <td>2020-Present</td>
            </tr>
            {/* */}
            <tr className="hover">
              <th>HSC</th>
              <td>Business Studies</td>
              <td>Govt. Bangla College</td>
              <td>2019-20</td>
            </tr>
            {/* */}
            <tr>
              <th>SSC</th>
              <td>General</td>
              <td>I.E.S School & College</td>
              <td>2017-18</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Education;