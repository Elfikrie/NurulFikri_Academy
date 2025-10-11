<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    body {
      padding: 10em;
    }
    #button {
      background-color: skyblue;
      padding: 8px 15px;
      border: none;
      border-radius: 10px;
      color: white;
      box-shadow: 0px 0px 2px 2px black;
    }
  </style>
</head>
<body>
    <h1>Form Nilai Siswa</h1> 
    <form method="POST" action="#"> 
      <div class="form-group row">
        <label for="name" class="col-4 col-form-label">Nama Lengkap</label> 
        <div class="col-8">
          <div class="input-group">
            <input id="name" name="name" placeholder="Nama Lengkap" type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="form-group row">
          <label for="email" class="col-4 col-form-label">Email</label> 
          <div class="col-8">
            <input id="email" name="email" placeholder="Email" type="email" class="form-control">
          </div>
      </div>
      <div class="form-group row">
        <label for="nilaiUjian" class="col-4 col-form-label">Nilai Ujian</label> 
        <div class="col-8">
          <input id="nilaiUjian" name="nilaiUjian" placeholder="Nilai Ujian" type="text" class="form-control">
        </div>
      </div>
      <input type="submit" value="kirim" id="button">
    </form>
    <br><br>
    <table border="1">
        <tr>
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nama = $_POST['name'];
            $email = $_POST['email'];
            $nilai = $_POST['nilaiUjian'];

            echo "<p><strong>Nama:</strong> $nama</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Nilai:</strong> $nilai</p>";

            // Struktur Kendali
            if ($nilai > 70) {
                echo "<h3 style='color: green;'>Status: Lulus</h3>";
            } else {
                echo "<h3 style='color: red;'>Status: Remedial</h3>";
            }
        }

    ?>
      </tr>
    </table>
</body>
</html>




