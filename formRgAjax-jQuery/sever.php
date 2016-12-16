<?php 	
	$conn = mysqli_connect('localhost', 'admin', '', 'test') or die ('Không the ket noi toi database');
	$id = $_POST['id'];		
	// $pw = $_GET['pw'];
	// $email = $_GET['email'];
	// $date = $_GET['date'];
	$sql = "SELECT id, pw FROM users where id = '".$id."'";
	$result = mysqli_query($conn, $sql);
	if (!$result){
	 	die ('Câu truy v?n b? sai');
	}else{	
			while ($row = mysqli_fetch_assoc($result)) {
		   	 	if($row['id'] == $id) {
		   	 		echo "false";
		   	 		return false;
		   	 	}else{
		   	 			echo "true";
		   	 			return true;
		   	 		}
		 	}
		}
 ?>