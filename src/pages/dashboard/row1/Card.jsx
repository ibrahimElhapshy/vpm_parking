
import { Paper, Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import { ResponsivePie } from '@nivo/pie'





// eslint-disable-next-line react/prop-types
const Card = ({icon, title, subTitle, increase, data, scheme }) => {
  const theme = useTheme();
  return (
    <Paper
        sx={{
          flexGrow: 1,
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Stack direction={"column"} gap={1}>
        {  icon  }
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2">{subTitle}</Typography>
        </Stack>

        <Stack direction={"column"} alignItems={"center"}>
        <Box height={"80px"}  width={"80px"}>

        <ResponsivePie
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
  
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        colors={{ scheme: scheme}}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
    
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
      
      
    />

        </Box>



          <Typography variant="body2">{increase}</Typography>
        </Stack>
      </Paper>
      

  );
}

export default Card;
