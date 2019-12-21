<?php
/* Al principio del archivo añadimos las constantes en un chunk de código */
$jobsExtendido = [
  [
    'title' => 'Junior Machine Learning Engineer',
    'description' => 'bla bla bla bla',
    'visible' => true,
    'months' => 6
  ],[
    'title' => 'Senior Machine Learning Engineer',
    'description' => 'bla bla bla bla',
    'visible' => true,
    'months' => 10
  ],[
    'title' => 'Super Senior Machine Learning Engineer',
    'description' => 'bla bla bla bla',
    'visible' => true,
    'months' => 48
  ],
  [
    'title' => 'Super Saiyan Machine Learning Engineer',
    'description' => 'bla bla bla bla',
    'visible' => false,
    'months' => 21
  ],
  [
    'title' => 'Master of the fu***ng universe',
    'description' => 'bla bla bla bla',
    'visible' => false,
    'months' => 120
  ]
];
?>

<!doctype html>
<html lang="en">

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
      crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Resume</title>
  </head>

  <body>

  
    <div class="row">
      <div class="col">
        <h2 class="border-bottom-gray">Carrer Summary<h2>
        <p>Lorem Ipsum</p>
      </div>     
    </div> <!-- end row -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
      crossorigin="anonymous"></script>

  </body>

  
</html>






  <!-- Resumen del CV en pocas líneas -->
      <!--
    
    


      <div class="container">

 Cabecera del CV
<div id="resume-header" class="row">

  

  <div class="col">

    <h1><?php echo $name; ?></h1>
    <h2>PHP Developer</h2>
    <ul>
      <li>Mail: hector@mail.com</li>
      <li>LinkedIn: https://linkedin.com</li>
      <li>Twitter: @hectorbenitez</li>
    </ul>

  </div>

</div>

<div class="row">

  <div class="col">

    <div>
      <h3 class="border-bottom-gray" >Work Experience</h3>
      <ul>

      <?php
      /* Calculamos los meses totales y si estos exceden o no un límite preestablecido. */
      $totalMonths = 0;
      for ($idx = 0; $idx < count($jobsExtendido); $idx++){

        $totalMonths += $jobsExtendido[$idx]['months'];

        if ($totalMonths < $limitMonths){
          break; 
        };

        $idx = $idx + 1;
        printJob($jobsExtendido[$idx]);
      ?>

      </ul>

    </div>

  </div>

<div>

        <h3 class="border-bottom-gray">Projects</h3>


        <div class="project">
            <h5>Project X</h5>
            <div class="row">
                <div class="col-3">
                    <img id="profile-picture" src="https://ui-avatars.com/api/?name=John+Doe&size=255" alt="">
                  </div>
                  <div class="col">
                    <p>Lorem ipsum.</p>
                    <strong>Technologies used:</strong>
                    <span class="badge badge-secondary">PHP</span>
                    <span class="badge badge-secondary">HTML</span>
                    <span class="badge badge-secondary">CSS</span>
                  </div>
            </div>
        </div>


        <div class="project">
            <h5>Project X</h5>
            <div class="row">
                <div class="col-3">
                    <img id="profile-picture" src="https://ui-avatars.com/api/?name=John+Doe&size=255" alt="">
                  </div>
                  <div class="col">
                    <p>Lorem ipsum.</p>
                    <strong>Technologies used:</strong>
                    <span class="badge badge-secondary">PHP</span>
                    <span class="badge badge-secondary">HTML</span>
                    <span class="badge badge-secondary">CSS</span>
                  </div>
            </div>
        </div>


      </div>


</div>
















<!--   


<div class="col-3">
  <img id="profile-picture" src="https://ui-avatars.com/api/?name=John+Doe&size=255" alt="">
</div>












-->
