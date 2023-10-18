import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TableSortLabel } from '@mui/material';

const adsData = [
  { id: 1, campaign: 'Cosmetics', clicks: 712, cost: "USD 29370", Coversion: 8,  revenue: "USD 16,568"},
  { id: 2, campaign: 'Serums', clicks: "3,961",cost: "USD 29370", Coversion: 115,revenue: "USD 362,526" },
  { id: 3, campaign: 'Facewash', clicks: "9,462",cost: "USD 29370", Coversion: 123,revenue: "USD 266,800" },
  { id: 4, campaign: 'Shampoos', clicks: "439", cost : "USD 29370",Coversion: 5, revenue: "USD 11,029" },
  { id: 4, campaign: 'Conditioners', clicks: "1,680",cost : "USD 29370" , Coversion: 49,revenue: "USD 175245"},
  { id: 4, campaign: 'Facewash 2', clicks: "4,978", cost : "USD 29370", Coversion: 189, revenue: "USD 623,106" },
];

const columns = [
  { id: 'campaign', label: 'Campaign' },
  { id: 'clicks', label: 'Clicks' },
  { id: 'cost', label: 'Cost' },
  { id: 'Coversion', label: 'Conversion' },
  { id: 'revenue', label: 'Revenue' },
];

// const AdsInsightsTable = () => {
//   const [orderBy, setOrderBy] = useState('clicks');
//   const [order, setOrder] = useState('desc');

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const sortedData = adsData.sort((a, b) => {
//     const aValue = a[orderBy];
//     const bValue = b[orderBy];

//     if (order === 'asc') {
//       return aValue < bValue ? -1 : 1;
//     } else {
//       return aValue > bValue ? -1 : 1;
//     }
//   });

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column.id} sortDirection={orderBy === column.id ? order : false}>
//                 <TableSortLabel
//                   active={orderBy === column.id}
//                   direction={orderBy === column.id ? order : 'asc'}
//                   onClick={() => handleRequestSort(column.id)}
//                 >
//                   {column.label}
//                 </TableSortLabel>
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {sortedData.map((row) => (
//             <TableRow key={row.id}>
//               {columns.map((column) => (
//                 <TableCell key={column.id}>{row[column.id]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// ... (previous imports)

// ... (previous imports)

const AdsInsightsTable = () => {
    const [orderBy, setOrderBy] = useState('clicks');
    const [order, setOrder] = useState('desc');
  
    const handleRequestSort = (property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const sortedData = adsData.slice().sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
  
      if (order === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                    {orderBy === column.id ? (
                      <span style={{ border: 0, clip: 'rect(0 0 0 0)', height: 1, margin: -1, overflow: 'hidden', padding: 0, position: 'absolute', width: 1 }}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default AdsInsightsTable;
  
  

// export default AdsInsightsTable;
