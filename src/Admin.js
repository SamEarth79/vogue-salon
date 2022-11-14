import React from "react";
import AdminBody from "./AdminBody";
import AdminNav from "./AdminNav";

function Admin() {
	return (
		<div className="bg-gradient-to-t from-BG to-orange-50 h-screen">
			<AdminNav />
			<AdminBody />
		</div>
	);
}

export default Admin;
