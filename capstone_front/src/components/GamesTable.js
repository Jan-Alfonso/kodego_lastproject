import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";

const options = {
  filterType: "checkbox",
  selectableRows: false,
};

function GamesTable() {
  const columns = ["Game", "Category", "Price", "Download"];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/games", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("login_token"),
          },
        });
        let phigames = response.data.phigames;
        setData(phigames);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          marginTop: "10rem",
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "10rem",
        }}
      >
        <div className="pagesTitle">Top Games in the Philippines</div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          </div>
        ) : (
          <MUIDataTable
            loading={loading}
            title={"Popular E-Games in the Philippines"}
            data={data.map((d) => {
              return [
                d.game_name,
                d.game_category,
                d.game_price,
                d.game_download,
              ];
            })}
            columns={columns}
            options={options}
          />
        )}
      </div>
    </>
  );
}

export default GamesTable;
