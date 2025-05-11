import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { getSocket, URL } from "@/socket/socket";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

const AppSocket = () => {
  const [status, setStatus] = useState(false);
  const socket = getSocket();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket is connected");
      setStatus(true)
    });

    socket.on("disconnect", (reason) => {
      console.log("socket is disconnected.", reason);
      setStatus(false)
    });

    socket.on("connect_error", (error) => {
      console.log("connection error", error);
    });
  }, []);

  return (
    <Card className="p-2 m-2">
      <CardHeader>Socket</CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Socket</TableCell>
              <TableCell>
                {status ? (
                  <div className="p-1 rounded-md bg-green-500 w-fit text-white">Connected</div>
                ) : (
                  <div className="p-1 rounded-md bg-slate-500 text-white w-fit">
                    Disconnected
                  </div>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Url</TableCell>
              <TableCell>
                <div className="p-1 rounded-md w-fit">{URL}</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AppSocket;
